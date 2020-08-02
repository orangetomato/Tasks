import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={HomePage} />
          <Route path={'/employees'} exact component={EmployeesPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
