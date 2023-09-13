import React from 'react';
import OneTodo from './OneTodo';

function ListTodos({
  tasks,
  filter,
  setFilter,
  onComplete,
  onDestroy,
  onToggle,
  remainingTasks,
}) {
  const filteredTasks =
    filter === 'ALL'
      ? tasks
      : filter === 'ACTIVE'
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        onClick={(e) => onToggle(e.target.checked)}
      />
      <label htmlFor="toggle-all">Tâches finies</label>
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <OneTodo
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDestroy={onDestroy}
          />
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTasks} tâches restantes</strong>
        </span>
        <ul className="filters">
          <li>
            <a
              className={filter === 'ALL' ? 'selected' : ''}
              onClick={() => setFilter('ALL')}
            >
              ALL
            </a>
          </li>
          <li>
            <a
              className={filter === 'ACTIVE' ? 'selected' : ''}
              onClick={() => setFilter('ACTIVE')}
            >
              ACTIVE
            </a>
          </li>
          <li>
            <a
              className={filter === 'COMPLETED' ? 'selected' : ''}
              onClick={() => setFilter('COMPLETED')}
            >
              COMPLETED
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default ListTodos;