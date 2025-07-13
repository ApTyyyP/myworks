import DataGrid from './ProductSearch/DataGrid';
import { productList } from './ProductSearch/productList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task2() {

  return (
    <div className="task-2">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 2</h3>
      </div>

      <p>
        Таблиця з фільтрацією та сортуванням (<i>чутлива до UI</i>)
      </p>
      <ul>
        <li>Створіть компонент <b>DataGrid</b> (<i>батьківський</i>) та <b>GridRow</b> (<i>дочірній</i>).</li>
        <li>DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.</li>
        <li><b>GridRow</b> (<i>обгорнутий у <b>React.memo</b></i>) відображає один рядок даних.</li>
        <li>Використайте <b>useDeferredValue</b> для пошукового запиту та/або параметрів сортування.</li>
        <li>Використайте <b>useMemo</b> для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.</li>
        <li>Використайте <b>useCallback</b> для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.</li>
        <li><b>Мета:</b> забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.</li>
      </ul>

      <hr />

      <DataGrid productList={productList} />
    </div>
  );
}

export default Task2;
