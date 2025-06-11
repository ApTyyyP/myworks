import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const dictionary = [
  {
    englishWord: 'bottle',
    ukrainianWord: 'пляшка',
    img: 'image/bottle.jpg',
  },
  {
    englishWord: 'difficult',
    ukrainianWord: 'важкий',
    img: 'image/difficult.jpg',
  },
  {
    englishWord: 'duck',
    ukrainianWord: 'качка',
    img: 'image/duck.jpg',
  },
  {
    englishWord: 'fire',
    ukrainianWord: 'вогонь',
    img: 'image/fire.jpg',
  },
  {
    englishWord: 'clock',
    ukrainianWord: 'годинник',
    img: 'image/clock.jpg',
  },
];

function Task3() {
  // поточна картка зі словника
  const [cardToDisplay, setCardToDisplay] = useState(dictionary[0]);
  // те, що вводить користувач
  const [translation, setTranslation] = useState('');
  // текст результату перевірки
  const [message, setMessage] = useState('');
  // для CSS-класу рамки
  const [statusTranslate, setStatusTranslate] = useState('');
  // для плавної анімації появи
  const [animateCard, setAnimateCard] = useState(false);


  // При клику «Наступне слово»
  const onRandomizeCard = () => {
    /*
    Генеруємо випадковий індекс до тих пір, поки не отримаємо нове слово,
    яке відрізняється від поточного (щоб уникнути повторення того самого слова)
    */
    let index;
    do {
      index = Math.floor(Math.random() * dictionary.length);
    } while (dictionary[index].englishWord === cardToDisplay.englishWord);

    setCardToDisplay(dictionary[index]);
    setTranslation(''); // скидання інпуту
    setMessage(''); // скидання повідомлення
    setStatusTranslate(''); // скидання рамки

    // Робимо анімацію появи
    setAnimateCard(false);
    setTimeout(() => {
      setAnimateCard(true);
    }, 10); // даємо React перерендеруватися
  };

  // При клику «Перевірити» чи Enter
  const onTestTranslation = () => {
    if (translation.trim() === cardToDisplay.ukrainianWord) {
      setMessage('Добре. Молодець!');
      setStatusTranslate('success');
    } else {
      setMessage('Невірно, спробуйте ще раз');
      setStatusTranslate('error');
    }
  };

  return (
    <div className="task-3">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 3</h3>
      </div>

      <p>
        Елемент тренажера англійської. Виводимо зображення елемента і слово.
        Користувач вводить відповідь. Якщо вірно — відтворюємо фразу «Добре.
        Молодець!» і додаємо зелену рамку; якщо ні — «Невірно, спробуйте ще раз»
        і червону рамку.
      </p>

      <hr />

      <div className={`card ${statusTranslate}`}>
        <div className={animateCard ? 'fade-in' : ''}>
          <figure className="figure">
            <img
              src={cardToDisplay.img}
              alt={cardToDisplay.englishWord}
              className="figure-img img-fluid rounded"
            />
          </figure>

          <div className="english-word">{cardToDisplay.englishWord}</div>
        </div>

        <h2 className="card-title">Ваш переклад:</h2>

        <input
          type="text"
          className="form-control w-75"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && onTestTranslation()}
        />

        <button
          className="btn btn-outline-info m-2"
          onClick={onTestTranslation}
          disabled={!translation.trim()}
        >
          Перевірити
        </button>

        <button className="btn btn-dark m-3" onClick={onRandomizeCard}>
          Наступне слово
        </button>

        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default Task3;
