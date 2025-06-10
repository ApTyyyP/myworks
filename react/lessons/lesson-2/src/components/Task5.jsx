import { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const listItems = [
  {
    id: 1,
    domain: 'vuejs.org',
    thumb: 'image/vue.svg',
    breadcrumbs: 'https://vuejs.org/ > docs',
    url: 'https://vuejs.org/',
    title: 'Vue.js — The Progressive JavaScript Framework',
    description:
      "Vue (вимовляється як (англ.) /vjuː/, (укр) /в'ю/) — це фреймворк, який працює на JavaScript, створений для розробки користувацьких інтерфейсів. Він працює на базі звичайного HTML, CSS та JavaScript, з можливостями декларативно програмувати користувацькі інтерфейси будь-якої складності на основі компонентів.",
  },
  {
    id: 2,
    domain: 'react.dev',
    thumb: 'image/react.png',
    breadcrumbs: 'https://react.dev/ > learn',
    url: 'https://react.dev/',
    title: 'React — The library for web and native user interfaces',
    description:
      'React — це відкритий JavaScript-фреймворк, а точніше, бібліотекою JavaScript, яка використовується для розробки інтерфейсів користувача. Він був створений компанією Facebook і швидко набув популярності серед розробників з усього світу. Реакт дозволяє ефективно створювати застосунки з високою продуктивністю і масштабованістю. Одним з ключових концепцій у React JS є компоненти. Вони представляють собою незалежні блоки коду, які відповідають за рендеринг певної частини користувацького інтерфейсу.',
  },
  {
    id: 3,
    domain: 'react.dev',
    thumb: 'image/angular.png',
    breadcrumbs: 'https://angular.io/ > docs',
    url: 'https://angular.io/',
    title: 'Angular — The web development framework for building the future',
    description:
      'Angular (зазвичай так називають фреймворк Angular 2 або Angular 2+, тобто вищі версії) — написаний на TypeScript front-end фреймворк з відкритим кодом, який розробляється під керівництвом Angular Team у компанії Google, а також спільнотою приватних розробників та корпорацій. Angular — це AngularJS, який був переосмислений та перероблений тією ж командою розробників.',
  },
];

function Task5() {
  const [darkThemeColor, setDarkThemeColor] = useState(false);

  useEffect(() => {
    document.body.className = darkThemeColor ? 'container-box-dark' : '';
  }, [darkThemeColor]);

  const helpText = `Перемкнути на ${darkThemeColor ? 'світлу' : 'темну'} тему`;

  const tooltip = <Tooltip id="toggle-tooltip">{helpText}</Tooltip>;

  return (
    <div className="container pt-5 task-5">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 5</h3>
      </div>
      <p>
        Самостійно сформуйте масив даних та виведіть фрагмент на зразок
        поданого <i>(дані не обов'язково повинні співпадати)</i>.
      </p>

      <hr />

      <OverlayTrigger
        placement="right"
        overlay={tooltip}
        container={document.getElementById('root')}
      >
        <label className="switch">
          <input
            type="checkbox"
            checked={darkThemeColor}
            onChange={() => setDarkThemeColor((prev) => !prev)}
          />
          <span
            className={`slider round ${darkThemeColor ? 'dark-theme' : ''}`}
          ></span>
        </label>
      </OverlayTrigger>

      <div className="d-flex flex-column py-5">
        {listItems.map((item) => (
          <div
            key={item.id}
            className={`data-item-box ${
              darkThemeColor ? 'data-item-box-dark' : ''
            }`}
          >
            <div className="item-box-thumb">
              <div className="item-box-img">
                <img
                  src={item.thumb}
                  className={`thumb-img ${
                    !darkThemeColor ? 'data-item-box-dark' : ''
                  }`}
                  alt={item.title}
                />
              </div>
              <div className="item-body">
                <div className="item-domain">{item.domain}</div>
                <div className="item-breadcrumbs">{item.breadcrumbs}</div>
              </div>
            </div>
            <div className="item-title">
              <a href={item.url}>{item.title}</a>
            </div>
            <div className="item-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task5;
