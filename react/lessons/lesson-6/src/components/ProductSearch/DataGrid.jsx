import { useState, useDeferredValue, useMemo, useCallback, useEffect } from 'react';
import { productList } from './productList';
import GridRow from './GridRow';

function DataGrid() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(false);

  // Зниження навантаження при швидкому вводі
  const deferredSearch = useDeferredValue(search);

  // Уникнення створення нових функцій при кожному рендері
  const handleSort = useCallback(
    (key) => {
      if (sortBy === key) {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortBy(key);
        setSortOrder('asc');
      }
    },
    [sortBy],
  );

  // Уникнення перерахунку результату
  const filteredAndSorted = useMemo(() => {
    let result = productList;

    if (deferredSearch) {
      const query = deferredSearch.toLowerCase();
      result = result.filter((p) => Object.values(p).some((val) => String(val).toLowerCase().includes(query)));
    }

    if (sortBy) {
      result = [...result].sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];
        if (typeof valA === 'string') {
          return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
          return sortOrder === 'asc' ? valA - valB : valB - valA;
        }
      });
    }

    return result;
  }, [deferredSearch, sortBy, sortOrder]);

  // Завантаження при фільтрації або сортуванні
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [deferredSearch, sortBy, sortOrder]);

  return (
    <div className="py-2">
      <h2 className="my-2">
        Всього товарів: <span className="badge bg-secondary">{productList.length}</span>
      </h2>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Пошук за назвою або категорією"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-2 text-muted">
        Знайдено {filteredAndSorted.length} з {productList.length} товарів
      </div>
      <div className="table-responsive" style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <table className="table table-hover table-striped table-bordered align-middle text-center mw-100">
          <thead className="table-light position-sticky top-0">
            <tr>
              <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                Назва {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th onClick={() => handleSort('category')} style={{ cursor: 'pointer' }}>
                Категорія {sortBy === 'category' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th onClick={() => handleSort('price')} style={{ cursor: 'pointer' }}>
                Ціна {sortBy === 'price' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th onClick={() => handleSort('rating')} style={{ cursor: 'pointer' }}>
                Рейтинг {sortBy === 'rating' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Завантаження...</span>
                  </div>
                </td>
              </tr>
            ) : filteredAndSorted.length > 0 ? (
              filteredAndSorted.map((product) => <GridRow key={product.id} {...product} />)
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  Нічого не знайдено за вашим запитом.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataGrid;
