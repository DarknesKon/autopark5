// src/components/Header.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks'; // Импортируем компонент Tasks

const Header = ({ openSidebar }) => {
  const [tasksOpen, setTasksOpen] = useState(false);

  const toggleTasks = () => {
    setTasksOpen(!tasksOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={openSidebar}>
        <span className="material-icons-outlined">menu</span>
      </div>
      <div className="header-left">
        <span className="material-icons-outlined" onClick={toggleTasks}>assignment</span>
      </div>
      <div className="header-right">
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>

      {tasksOpen && (
        <div className="tasks-popup">
          <button className="close-button" onClick={toggleTasks}>×</button>
          <Tasks />
        </div>
      )}
      
    </header>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
};

export default Header;
