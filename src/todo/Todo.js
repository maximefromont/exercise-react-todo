import React, { useState } from 'react';
import { createNewTask, INITIAL_TASKS } from './task-util';
import PropTypes from 'prop-types';
import './Todo.css';
import ActionFilterButton from './dumbs/ActionFilterButton';
import NewTodoForm from './dumbs/NewTodoForm';
import OneTodo from './dumbs/OneTodo';

function Todo() {
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

    const filteredTasks = filter === 'ALL' ? tasks : filter === 'ACTIVE' ? tasks.filter((t) => !t.completed) : tasks.filter((t) => t.completed);

    return (
        <div className="App">
            <section className="todoapp">
                <header className="header">
                    <h1>Todo APP</h1>
                </header>
                <NewTodoForm onCreateTask={onCreateTask} />
                <section className="main">
                    <input
                        type="checkbox"
                        id="toggle-all"
                        className="toggle-all"
                        onClick={(e) => onToggle(e.target.checked)}
                    />
                    <label htmlFor="toggle-all">Tâches finies</label>
                    <ul className="todo-list">
                        {filteredTasks.map((task) => ( //QUESTION 1
                            <OneTodo
                                key={task.id}
                                task={task}
                                onComplete={onComplete}
                                onDestroy={onDestroy}
                            />
                        ))}
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{remainingTasks} tâches restantes</strong>
                    </span>
                    <ul className="filters"> {/*QUESTION 3 (précédemment question 2)*/}
                        <ActionFilterButton filterValue="ALL" selectedFilter={filter} onClick={setFilter} />
                        <ActionFilterButton filterValue="ACTIVE" selectedFilter={filter} onClick={setFilter} />
                        <ActionFilterButton filterValue="COMPLETED" selectedFilter={filter} onClick={setFilter} />
                    </ul>
                </footer>
            </section>
        </div>
    );
}

export default Todo;
