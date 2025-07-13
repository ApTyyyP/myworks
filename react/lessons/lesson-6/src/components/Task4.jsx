import React, { useState, useMemo } from 'react';
import useDebounce from './UseDebounce/UseDebounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task4() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const searchResult = useMemo(() => {
    if (debouncedValue.trim() === '') return 'Нічого не знайдено';
    return `Результати для: "${debouncedValue}"`;
  }, [debouncedValue]);

  return (
    <div className="task-4">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 4</h3>
      </div>

      <p>
        <b>useDebounce</b> — відкладений виклик функції
      </p>
      <p>
        Створіть кастомний хук <b>useDebounce</b>, який приймає значення та затримку в мілісекундах. Він повинен
        повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
      </p>
      <p>
        Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою
        (<i>наприклад, 500мс</i>) після зупинки введення, використовуючи <b>useDebounce</b>.
      </p>

      <hr />

      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Пошук
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Що шукаємо?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="alert alert-secondary" role="alert">
        {searchResult}
      </div>
    </div>
  );
}

export default Task4;
