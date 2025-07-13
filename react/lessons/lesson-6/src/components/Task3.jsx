import React from 'react';
import DisplayWindowSize from './DisplayWindowSize/DisplayWindowSize';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task3() {
  return (
    <div className="task-3">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 3</h3>
      </div>

      <p>
        <b>useWindowSize</b> — розмір вікна браузера
      </p>
      <p>
        Створіть кастомний хук <b>useWindowSize</b>, який повертає поточну ширину та висоту вікна браузера. Він повинен
        оновлюватися при зміні розміру вікна.
      </p>
      <p>
        Створіть компонент, який відображає поточні розміри вікна браузера (<i>ширина x висота</i>), використовуючи{' '}
        <b>useWindowSize</b>. На основі розмірів відображати іконки монітора, планшета або телефона.
      </p>

      <hr />

      <DisplayWindowSize />
    </div>
  );
}

export default Task3;
