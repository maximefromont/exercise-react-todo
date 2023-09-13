import React, { useState } from 'react'; //QUESTION 5 (final)
import { createNewTask, INITIAL_TASKS } from './task-util';
import NewTodoForm from './dumbs/NewTodoForm';
import ListTodos from './dumbs/ListTodos';

function TodoContainer() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState('ALL');

  const remainingTasks = tasks.filter((t) => !t.completed).length;

  function onComplete(task) {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === task.id ? { ...task, completed: !task.completed } : t))
    );
  }

  function onDestroy(task) {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  function onToggle(checked) {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((t) => {
        if (t.completed === checked) {
          return t;
        } else {
          return { ...t, completed: checked };
        }
      });
      return newTasks;
    });
  }

  function onCreateTask(value) {
    const newTask = createNewTask(value);
    setTasks((tasks) => [...tasks, newTask]);
  }

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>Todo APP</h1>
          <NewTodoForm onCreateTask={onCreateTask} />
        </header>
        <ListTodos
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          onComplete={onComplete}
          onDestroy={onDestroy}
          onToggle={onToggle}
          remainingTasks={remainingTasks}
        />
      </section>
    </div>
  );
}

export default TodoContainer;