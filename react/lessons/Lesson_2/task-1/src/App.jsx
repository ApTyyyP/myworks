import { useState } from 'react';
import smileImg from './assets/image/smile.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null);

  // Дані для входу
  const userList = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    { username: 'Іван', password: 'pass4' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Шукаємо користувача, у якого і логін, і пароль збігаються
    const toLowerCaseLogin = login.trim().toLowerCase();
    const toLowerCasePassword = password.trim().toLowerCase();

    const matched = userList.find(
      (user) =>
        user.username.trim().toLowerCase() === toLowerCaseLogin &&
        user.password.trim().toLowerCase() === toLowerCasePassword,
    );

    // Перевірка login
    setStatus(matched ? true : false);

    // Обнуляємо поля форми, якщо авторизувалися
    if (matched) {
      resetResult();
    }

    // Повертаємо фокус у поле Логін
    const inp = document.getElementById('inputName');
    if (inp) inp.focus();
  };

  // Встановлюємо колір помилки
  const errorColor = getErrorColor(status, login, userList);

  // Функція повертає масив користувачів
  function getUserList() {
    return userList;
  }

  const list = getUserList();

  function getErrorColor(status, login, list) {
    if (status !== false) {
      return '';
    }

    // Переписуємо логін у нижній регістр
    const toLowerCaseLogin = login.trim().toLowerCase();

    const user = list.find(
      (u) => u.username.trim().toLowerCase() === toLowerCaseLogin,
    );

    /* Перевіряємо, чи є введений логін у списку userList
    Якщо користувача знайдено та його ім'я збіглося з тим, що потрібно
    (тобто user.username === "Іван" у списку userList, де username="Іван") */
    const specialUser = list.find(
      (u) => u.username.trim().toLowerCase() === 'іван',
    )?.username;

    return user && user.username === specialUser ? 'blue' : 'red';
  }

  // Обнуляємо поля логіну і пароля
  function resetResult() {
    setLogin('');
    setPassword('');
    setShowPassword(false);
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center text-black">
        <h3>Задача 1</h3>
      </div>

      <p>
        Вводимо логін і пароль. Якщо логін вірний — відображаємо смайл. Якщо ні,
        то:
      </p>
      <ol>
        <li>
          якщо логін = Іван — колір повідомлення про помилку{' '}
          <span className="text-primary">синій</span>;
        </li>
        <li>
          якщо хтось інший, то колір повідомлення{' '}
          <span className="text-danger">червоний</span>.
        </li>
      </ol>

      <hr />

      <div className="text-center">
        <b>Дані для входу:</b>
      </div>
      <table className="table table-responsive table-striped table-bordered table-hover m-auto mt-2 col-3 text-center">
        <thead>
          <tr className="table-dark">
            <th scope="col" className="w-25">
              Логін
            </th>
            <th scope="col" className="w-25">
              Пароль
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="w-25">{user.username}</td>
              <td className="w-25">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <div className="form-field col-lg-4 col-md-6 col-sm-6 mt-4 m-auto">
          <div className="form-group mt-2">
            <label className="label" htmlFor="inputName">
              Логін:
            </label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className="form-group mt-2">
            <label className="label" htmlFor="inputPassword">
              Пароль:
            </label>
            <div class="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="inputPassword"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="input-group-text">
                <button
                  type="button"
                  className="btn check input-group-text"
                  onClick={toggleShowPassword}
                >
                  <i
                    className={`fas ${
                      showPassword ? 'fa-eye' : 'fa-eye-slash'
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="mt-4 w-100 btn btn-outline-dark">
            Увійти
          </button>

          <div className="result">
            {status === true && (
              <span className="success-image">
                <img src={smileImg} alt="Smile" className="img-fluid" />
              </span>
            )}
            {status === false && (
              <p style={{ color: errorColor }}>Неправильний логін або пароль</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
