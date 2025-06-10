import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const beersList = ['Світле', 'Темне', 'Червоне', 'Біле'];

const chipsList = [
  'Чипси Pringles',
  'Чипси Lays',
  'Хвилясті чипси',
  'Помідорні чипси',
  'Курячі чипси',
];

function Task2() {
  const [ticketClass, setTicketClass] = useState('default');
  const [optionsList, setOptionsList] = useState({
    cognac: false,
    newspaper: false,
    snacks: true,
    beer: '',
    chips: '',
  });

  const handleTicketChange = (e) => {
    setTicketClass(e.target.value);
    // при зміні класу скинемо дод. опції
    setOptionsList({
      cognac: false,
      newspaper: false,
      snacks: true,
      beer: '',
      chips: '',
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setOptionsList((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const handleRadio = (e) => {
    setOptionsList((prev) => ({
      ...prev,
      snacks: e.target.value === 'true',
    }));
  };

  const handleSelect = (e) => {
    const { id, value } = e.target;
    setOptionsList((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="container pt-5 task-2">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 2</h3>
      </div>

      <p>З випадаючого списку вибираємо клас квитка у літаку. Якщо:</p>
      <ol>
        <li>
          бізнес — виводимо елементи для вибору газети та коньяку (якщо вибрано
          коньяк, то запропонувати закуску [так/ні]), на фоні зображення
          бізнес-кают;
        </li>
        <li>
          економ — виводимо елементи для вибору типу пива і чипсів, на фоні
          хмарки.
        </li>
      </ol>

      <hr />

      <form>
        <div>
          <label htmlFor="ticket">Виберіть клас квитка:</label>
          <select
            id="ticket"
            className="form-select w-25 mb-5"
            value={ticketClass}
            onChange={handleTicketChange}
          >
            <option disabled value="default">
              Оберіть клас
            </option>
            <option value="business">Бізнес-клас</option>
            <option value="economy">Економ-клас</option>
          </select>
        </div>
      </form>

      {/* Бізнес-клас */}
      {ticketClass === 'business' && (
        <form className="business">
          <div className="smoke">
            <div className="p-3">
              <h2>Додаткові опції</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cognac"
                  value="cognac"
                  checked={optionsList.cognac}
                  onChange={handleCheckbox}
                />
                <label className="form-check-label" htmlFor="cognac">
                  Коньяк
                </label>
              </div>
            </div>
            <div className="p-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="newspaper"
                  value="newspaper"
                  checked={optionsList.newspaper}
                  onChange={handleCheckbox}
                />
                <label className="form-check-label" htmlFor="newspaper">
                  Газета
                </label>
              </div>
            </div>
            {optionsList.cognac && (
              <div className="p-3">
                <h2>Закуска потрібна?</h2>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="snacksYes"
                    name="snacks"
                    value="true"
                    checked={optionsList.snacks === true}
                    onChange={handleRadio}
                  />
                  <label className="form-check-label" htmlFor="snacksYes">
                    Так
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="snacksNo"
                    name="snacks"
                    value="false"
                    checked={optionsList.snacks === false}
                    onChange={handleRadio}
                  />
                  <label className="form-check-label" htmlFor="snacksNo">
                    Ні
                  </label>
                </div>
              </div>
            )}
          </div>
        </form>
      )}

      {/* Економ-клас */}
      {ticketClass === 'economy' && (
        <form className="economy">
          <div className="smoke">
            <div className="p-3">
              <label htmlFor="beer">Виберіть пиво</label>
              <select
                id="beer"
                className="form-select w-25"
                value={optionsList.beer}
                onChange={handleSelect}
              >
                <option disabled value="">
                  Оберіть пиво
                </option>
                {beersList.map((beer, i) => (
                  <option key={i} value={beer}>
                    {beer}
                  </option>
                ))}
              </select>

              <label htmlFor="chips" className="mt-3">
                Виберіть чипси
              </label>
              <select
                id="chips"
                className="form-select w-25"
                value={optionsList.chips}
                onChange={handleSelect}
              >
                <option disabled value="">
                  Оберіть чипси
                </option>
                {chipsList.map((chips, i) => (
                  <option key={i} value={chips}>
                    {chips}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Task2;
