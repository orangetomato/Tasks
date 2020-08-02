import React from 'react';
import Employee from './Employee';

export default function EmployeeList({employees}) {
  return (
    <ul className="list-group list-group-flush">
      {employees.map(item => <Employee key={item.id} {...item} />)}
    </ul>
  );
}