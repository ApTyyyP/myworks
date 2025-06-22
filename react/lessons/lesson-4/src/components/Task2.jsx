import GuessNumber from './GuessNumber/GuessNumber';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task2() {

  return (
    <div className="task-2">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3 className="text-center mb-3">Задача 2</h3>
      </div>

      <p>Гра “Вгадай число”. Правила гри:</p>
      <ol>
        <li>комп'ютер генерує трицифрове число;</li>
        <li>кожен гравець по черзі задає цифру, якої ще не було (відслідковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (<i>блокуємо кнопку “Зробити хід”</i>));</li>
        <li>якщо цифру вгадано, вона відображається у полі гри “Число”;</li>
        <li>програє той, хто вгадав останню цифру.</li>
      </ol>
      <p>Бажано відображати біля області кожного гравця цифри, які він вгадав</p>

      <hr />

      <GuessNumber />

    </div>
  );
}

export default Task2;
