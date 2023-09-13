import React, { useState } from 'react'; //QUESTION 4

function NewTodoForm({ onCreateTask }) {
  const [value, setValue] = useState('');

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      onCreateTask(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="new-todo"
        placeholder="Ajouter une tâche"
        autoComplete="off"
        autoFocus={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}

export default NewTodoForm;
