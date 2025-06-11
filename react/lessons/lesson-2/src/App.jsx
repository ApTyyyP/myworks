import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import PageFade from './components/PageFade'; // для плавної анімації
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Показувати таблицю лише якщо на головній сторінці
  const isHome = location.pathname === '/';

  return (
    <div className="container p-5">
      <div
        className={`mb-3 fade-${isHome ? 'exit' : 'enter'} ${
          !isHome ? 'fade-enter-active' : 'fade-exit-active'
        }`}
      >
        {!isHome && (
          <Link className="btn btn-primary" to="/">
            ← Назад до задач
          </Link>
        )}
      </div>

      <div
        className={`d-flex justify-content-center fade-${
          isHome ? 'enter' : 'exit'
        } ${isHome ? 'fade-enter-active' : 'fade-exit-active'}`}
      >
        {isHome && <h3>Домашнє завдання №2</h3>}
      </div>

      <div
        className={`fade-${isHome ? 'enter' : 'exit'} ${
          isHome ? 'fade-enter-active' : 'fade-exit-active'
        }`}
      >
        {isHome && (
          <table className="table table-responsive table-striped table-hover mt-5">
            <thead>
              <tr className="table-dark">
                <th scope="col">№</th>
                <th scope="col">Опис</th>
                <th scope="col">Дія</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Вводиться логін та пароль і виводиться смайл</td>
                <td>
                  <Link className="btn btn-secondary" to="/task1">
                    Рішення
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Випадаючий список</td>
                <td>
                  <Link className="btn btn-secondary" to="/task2">
                    Рішення
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Тренажер з англійської</td>
                <td>
                  <Link className="btn btn-secondary" to="/task3">
                    Рішення
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Вивід маркованого списку з елементами</td>
                <td>
                  <Link className="btn btn-secondary" to="/task4">
                    Рішення
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Самостійне формування масиву даних та його вивід</td>
                <td>
                  <Link className="btn btn-secondary" to="/task5">
                    Рішення
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Замовлення страв та статус виконання приготування</td>
                <td>
                  <Link className="btn btn-secondary" to="/task6">
                    Рішення
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Роути */}
      <Routes location={location}>
        <Route
          path="/task1"
          element={
            <PageFade>
              <Task1 />
            </PageFade>
          }
        />
        <Route
          path="/task2"
          element={
            <PageFade>
              <Task2 />
            </PageFade>
          }
        />
        <Route
          path="/task3"
          element={
            <PageFade>
              <Task3 />
            </PageFade>
          }
        />
        <Route
          path="/task4"
          element={
            <PageFade>
              <Task4 />
            </PageFade>
          }
        />
        <Route
          path="/task5"
          element={
            <PageFade>
              <Task5 />
            </PageFade>
          }
        />
        <Route
          path="/task6"
          element={
            <PageFade>
              <Task6 />
            </PageFade>
          }
        />

        {/* Головна */}
        <Route path="/" element={null} />

        {/* Редірект з головної сторінки */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
