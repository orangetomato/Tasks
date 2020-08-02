import React, {useEffect, useState} from 'react';
import Context from '../context.js';
import EmployeeList from '../components/EmployeeList';
import Form from '../components/Form';

const EmployeesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://reqres.in/api/users?per_page=12');
        const employees = await data.json();
        setData(employees.data);
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  const removeEmployee = id => {
    setData(data.filter(item => item.id !== id));
  }

  const addEmployee = ({first_name, last_name, email, avatar}) => {
    setData([
      ...data,
      {
        id: Date.now(),
        email,
        first_name, 
        last_name,
        avatar,
      }
    ]);
  }

  return (
    <Context.Provider value={{removeEmployee}}>
      <div>
        <h1 className="text-center">Employees</h1>
        <Form onCreate={addEmployee} />
        {data.length
          ? <EmployeeList employees={data} />
          : <p>No employees.</p>
        }
      </div>
    </Context.Provider>
  );
};

export default EmployeesPage;