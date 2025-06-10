import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const initialWaitingList = [
  'Борщ',
  'Капусняк запорізький',
  'Холодець',
  'Полядвиця',
  'Деруни житомирські',
  'Банош',
  'Полтавські галушки',
  'Вареники',
  'Голубці',
  'Котлети по-київськи',
  'Вергуни',
  'Торт «Київський»',
];

function Task6() {
  const [waitingList, setWaitingList] = useState([...initialWaitingList]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const tooltip = (
    <Tooltip id="toggle-tooltip">
      "тут треба зберігати 3 масиви страв (waitingList, processingList,
      completedList)"
    </Tooltip>
  );

  // Стан поля введення нової позиції
  const [order, setOrder] = useState('');

  // «Додати» — кладемо у waitingList
  const onWaiting = () => {
    if (!order.trim()) return;
    setWaitingList((prev) => [...prev, order.trim()]);
    setOrder('');
  };

  // «Готувати» — переносимо з waitingList → processingList
  const onProcessing = (index) => {
    setProcessingList((prev) => [...prev, waitingList[index]]);
    setWaitingList((prev) => prev.filter((_, i) => i !== index));
  };

  // «Приготовлено» — переносимо з processingList → completedList
  const onCompleted = (index) => {
    setCompletedList((prev) => [...prev, processingList[index]]);
    setProcessingList((prev) => prev.filter((_, i) => i !== index));
  };

  // «Подано» — видалити з completedList
  const onDeleted = (index) => {
    setCompletedList((prev) => prev.filter((_, i) => i !== index));
  };

  /*
  (prev) => prev.filter((_, i) => i !== index)
  Бере попередній масив і повертає новий, у якому виключено елемент з індексом index
  */

  return (
    <div className="container pt-5 task-6">
      <div className="d-flex justify-content-center text-black">
        <h3>Задача 6</h3>
      </div>

      <p>
        На кухню поступають замовлення. Спочатку ми додаємо їх у список
        <span className="bg-warning text-dark rounded-pill mx-1 p-1 lh-lg">
          "Очікують на виконання"
        </span>
      </p>

      <ul>
        <li>
          якщо повар береться робити — замовлення переходить у список
          <span className="bg-primary text-white rounded-pill mx-1 p-1 lh-lg">
            "Виконуються"
          </span>
          ;
        </li>
        <li>
          якщо замовлення виконано — переходить у список
          <span className="bg-success text-white rounded-pill mx-1 p-1 lh-lg">
            "Готові до виносу"
          </span>
          ;
        </li>
        <li>
          якщо натиснути на
          <span className="bg-secondary text-white rounded-pill mx-1 p-1 lh-lg">
            "Подано"
          </span>
          — страва зникає з таблиці.
        </li>
      </ul>

      <hr />

      <OverlayTrigger
        placement="right"
        overlay={tooltip}
        container={document.getElementById('root')}
      >
        <button type="button" className="btn btn-secondary">
          Підказка
        </button>
      </OverlayTrigger>

      <hr />

      {/* Введення нової позиції */}
      <div className="order p-3">
        <div className="input-group">
          <div className="form-floating flex-grow-1">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Нова страва"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && onWaiting()}
            />
            <label htmlFor="floatingInput" className="order__label">
              Нова замовлена страва
            </label>
          </div>
          <button
            className="btn btn-primary btn-lg"
            onClick={onWaiting}
            disabled={!order.trim()}
          >
            Додати
          </button>
        </div>

        {/* Три колонки */}
        <div className="order__block my-3">
          {/* Очікуючі */}
          <div className="order__column">
            <h3 className="order__title">Очiкують виконання</h3>
            {waitingList.map((product, index) => (
              <div key={index} className="order__status">
                <div>{product}</div>
                <button
                  onClick={() => onProcessing(index)}
                  className="btn bg-warning text-dark rounded-pill p-1 lh-lg"
                >
                  Готувати
                </button>
              </div>
            ))}
          </div>

          {/* Виконуються */}
          <div className="order__column">
            <h3 className="order__title">Виконуються</h3>
            {processingList.map((product, index) => (
              <div key={index} className="order__status">
                <div>{product}</div>
                <button
                  onClick={() => onCompleted(index)}
                  className="btn bg-primary text-white rounded-pill p-1 lh-lg"
                >
                  Приготовлено
                </button>
              </div>
            ))}
          </div>

          {/* Готові */}
          <div className="order__column">
            <h3 className="order__title">Готовi до виносу</h3>
            {completedList.map((product, index) => (
              <div key={index} className="order__status">
                <div>{product}</div>
                <button
                  onClick={() => onDeleted(index)}
                  className="btn bg-success text-white rounded-pill p-1 lh-lg"
                >
                  Подано
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task6;
