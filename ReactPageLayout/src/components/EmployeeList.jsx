// src/EmployeeList.js
import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {
  const employees = [
    { name: 'John Doe', title: 'Software Engineer' },
    { name: 'Jane Smith', title: 'Product Manager' },
    { name: 'Michael Johnson', title: 'Designer' }
  ];

  return (
    <div className="EmployeeList">
      {employees.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
