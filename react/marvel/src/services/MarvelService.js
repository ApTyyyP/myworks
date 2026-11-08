import { useHttp } from '../hooks/http.hook';

const API_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
let charactersPromise;

const hasValue = (value) => Boolean(value && value.trim() && value.trim() !== '-');

const loadCharacters = () => {
  if (!charactersPromise) {
    charactersPromise = fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not fetch characters, status: ${response.status}`);
        }
        return response.json();
      })
      .then((characters) =>
        characters.filter((char) => char.biography.publisher === 'Marvel Comics')
      )
      .catch((error) => {
        charactersPromise = undefined;
        throw error;
      });
  }
  return charactersPromise;
};

const buildComics = (characters) => {
  const issues = new Map();
  characters.forEach((char) => {
    const title = char.biography.firstAppearance;
    if (!hasValue(title)) return;
    if (!issues.has(title)) {
      issues.set(title, {
        id: issues.size + 1,
        title,
        names: [],
        thumbnail: char.images.lg,
      });
    }
    issues.get(title).names.push(char.name);
  });
  return Array.from(issues.values(), ({ names, ...comic }) => ({
    ...comic,
    description: `First appearance of ${names.join(', ')}`,
    pageCount: 'No information about the number of pages',
    language: 'NOT AVAILABLE',
    price: 'NOT AVAILABLE',
  }));
};

const transformCharacter = (char) => {
  const fullName = hasValue(char.biography.fullName) ? char.biography.fullName : char.name;
  const occupation = hasValue(char.work.occupation) ? char.work.occupation : 'Occupation unknown';
  const alignment = hasValue(char.biography.alignment) ? char.biography.alignment : 'unknown';
  const query = encodeURIComponent(char.name);
  return {
    id: char.id,
    name: char.name,
    description: `${fullName}. ${occupation}. Alignment: ${alignment}.`,
    thumbnail: char.images.lg,
    homepage: `https://www.marvel.com/search?limit=20&query=${query}`,
    wiki: `https://marvel.fandom.com/wiki/Special:Search?query=${query}`,
    comics: hasValue(char.biography.firstAppearance)
      ? [{ name: char.biography.firstAppearance }]
      : [],
  };
};

const useMarvelService = () => {
  const { clearError, process, setProcess } = useHttp();

  const withCharacters = async (select) => {
    setProcess('loading');
    try {
      return select(await loadCharacters());
    } catch (error) {
      setProcess('error');
      throw error;
    }
  };

  const getAllCharacters = (offset = 0) =>
    withCharacters((characters) => characters.slice(offset, offset + 9).map(transformCharacter));

  const getCharacterByName = (name) =>
    withCharacters((characters) => {
      const query = name.trim().toLowerCase();
      return characters.filter((char) => query && (
        char.name.toLowerCase().includes(query) ||
        char.biography.fullName.toLowerCase().includes(query)
      )).map(transformCharacter);
    });

  // Omitting the id selects a random Marvel character from the same cached list.
  const getCharacter = (id) =>
    withCharacters((characters) => {
      const char = id === undefined
        ? characters[Math.floor(Math.random() * characters.length)]
        : characters.find((item) => item.id === Number(id));
      if (!char) throw new Error('Character not found');
      return transformCharacter(char);
    });

  const getAllComics = (offset = 0) =>
    withCharacters((characters) => buildComics(characters).slice(offset, offset + 8));

  const getComic = (id) =>
    withCharacters((characters) => {
      const comic = buildComics(characters).find((item) => item.id === Number(id));
      if (!comic) throw new Error('Comic not found');
      return comic;
    });

  return {
    clearError,
    process,
    setProcess,
    getAllCharacters,
    getCharacterByName,
    getCharacter,
    getAllComics,
    getComic,
  };
};

export default useMarvelService;
