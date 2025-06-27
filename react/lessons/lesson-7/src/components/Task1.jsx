import NavBar from './NavBar';
import AppRoutes from '../routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Task1() {
  return (
    <div className="task-1">
      <div className="d-flex justify-content-center text-black mb-3">
        <h3>Задача 1</h3>
      </div>

      <p>Розробити додаток з функціональними можливостями</p>

      <hr />

      <div className="app-box">
        <NavBar />
        <AppRoutes />
      </div>
    </div>
  );
}

export default Task1;
