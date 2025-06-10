import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const workersList2 = [
    {
      id: '111',
      name: 'Іванов',
      salary: 10000,
    },
    {
      id: '112',
      name: 'Петров',
      salary: 20000,
    },
    {
      id: '113',
      name: 'Сидоров',
      salary: 50000,
    },
  ];

  function getWorkersList() {
    return workersList2;
  }

  const list = getWorkersList();

  return (
    <div className="container">
      <div className="d-flex justify-content-center text-black">
        <h3>Задача 4</h3>
      </div>

      <p>Вивести список як маркований список з елементами у форматі <i>(<b>name: salary</b>)</i>:</p>

      <code>
        <ul>
          {list.map(worker => (
            <li key={worker.id}>
              <b>{worker.name}:</b> {worker.salary}
            </li>
          ))}
        </ul>
      </code>

      <hr />

      <div className="d-flex justify-content-center mt-5">
        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr className="table-dark text-center">
              <th scope="col">№</th>
              <th scope="col">Ім'я</th>
              <th scope="col">Заробітна плата</th>
            </tr>
          </thead>
          <tbody>
            {list.map((worker, index) => (
              <tr key={worker.id} className="text-center">
                <td>{index + 1}</td>
                <td className="w-25">{worker.name}</td>
                <td className="w-25">{worker.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
