import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar }) => (
  <aside id="sidebar" className={sidebarOpen ? 'sidebar-responsive' : ''}>
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <span className="material-icons-outlined">car</span> Автобаза
      </div>
      <span 
        className="material-icons-outlined" 
        onClick={closeSidebar} 
        role="button" 
        tabIndex="0"
        aria-label="Close Sidebar"
      >
        close
      </span>
    </div>

    <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <Link to="/" onClick={closeSidebar}>
          <span className="material-icons-outlined">home</span> <span>Главная</span>
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/drivers" onClick={closeSidebar}>
          <span className="material-icons-outlined">directions_car</span> <span>Водители</span>
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/transport" onClick={closeSidebar}>
          <span className="material-icons-outlined">local_shipping</span> <span>Транспорт</span>
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/location" onClick={closeSidebar}>
          <span className="material-icons-outlined">location_on</span> <span>Местоположение</span>
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/direction-sheet" onClick={closeSidebar}>
          <span className="material-icons-outlined">event_note</span> <span>Путевый лист</span>
        </Link>
      </li>
      <li className="sidebar-list-item"> {/* Добавьте новый элемент списка */}
        <Link to="/fuel-info" onClick={closeSidebar}>
          <span className="material-icons-outlined">local_gas_station</span> <span>Информация о топливе</span>
        </Link>
      </li>
    </ul>
  </aside>
);

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
