// src/components/Tasks.js
import React from 'react';
import '../assets/Tasks.css'; // Импортируй обновленный файл стилей

const Tasks = () => {
  const tasks = [
    { id: 1, text: 'Проверить новые штрафы', status: 'completed' },
    { id: 2, text: 'Обновить информацию о водителях', status: 'in-progress' },
    { id: 3, text: 'Проверить отчеты по топливу', status: 'not-completed' },
  ];

  return (
    <div className="tasks">
      <h2>Список задач</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className={`status ${task.status}`}></span>
            <span>{task.text}</span> - <span>{task.status === 'completed' ? 'Выполнено' : task.status === 'in-progress' ? 'В процессе' : 'Не выполнено'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
