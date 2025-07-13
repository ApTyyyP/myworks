import Calculator from './Calculator/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task1() {

  return (
    <div className="task-1">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 1</h3>
      </div>

      <p>
        Оптимізація вибіркового рендеру з useMemo та React.memo
      </p>
      <p>
        Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. Також є окремий компонент <b>ResultDisplay</b>, який відображає A + B. Обгорніть ResultDisplay у <b>React.memo()</b>. Використайте <b>useMemo</b> в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті (<i>наприклад, лічильник, що не впливає на A чи B</i>).
      </p>

      <hr />

      <Calculator />
    </div>
  );
}

export default Task1;
