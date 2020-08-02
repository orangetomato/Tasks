import React, {useContext} from 'react';
import Context from '../context.js';

export default function Employee({first_name, last_name, id}) {
  const {removeEmployee} = useContext(Context);

  return (
    <li className="list-group-item employee">
      <span>{first_name} {last_name}</span>
      <button type="button" className="btn btn-danger" onClick={() => removeEmployee(id)}>Delete</button>
    </li>
  );
}