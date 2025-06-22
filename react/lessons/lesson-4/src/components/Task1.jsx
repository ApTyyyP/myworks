import Messenger from './Messenger/Messenger';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Task1() {
  return (
    <div className="task-1">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 1</h3>
      </div>

      <p>Створити імітатор мессенджера. Є можливість додавати/відображати повідомлення і ставити лайки</p>

      <hr />

      <Messenger />
    </div>
  );
}

export default Task1;
