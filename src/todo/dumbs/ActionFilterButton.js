import React from 'react';

function ActionFilterButton({ filterValue, selectedFilter, onClick }) {
  return (
    <li>
      <a className={selectedFilter === filterValue ? 'selected' : ''} onClick={() => onClick(filterValue)}>{filterValue}</a>
    </li>
  );
}

export default ActionFilterButton;