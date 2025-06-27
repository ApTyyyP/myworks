import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-2">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/task1"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'text-black active' : 'text-white'}`}
          >
            Головна
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/task1/products"
            className={({ isActive }) => `nav-link ${isActive ? 'text-black active' : 'text-white'}`}
          >
            Магазин
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/task1/terms"
            className={({ isActive }) => `nav-link ${isActive ? 'text-black active' : 'text-white'}`}
          >
            Правила оплати
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/task1/contacts"
            className={({ isActive }) => `nav-link ${isActive ? 'text-black active' : 'text-white'}`}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
