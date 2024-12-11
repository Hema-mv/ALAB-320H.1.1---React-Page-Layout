// src/EmployeeListItem.js
import React from 'react';

function EmployeeListItem({ employee }) {
  return (
    <div className="EmployeeListItem">
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
    </div>
  );
}

export default EmployeeListItem;
