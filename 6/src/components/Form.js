import React, {useState} from 'react';

const Form = ({onCreate}) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  });

  const submitHandler = evt => {
    evt.preventDefault();
    onCreate(values);
    setValues({
      first_name: '',
      last_name: '',
      email: '',
      avatar: ''
    });
  }

  return (
    <form className="mb-4" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          placeholder="First name"
          value={values.first_name}
          onChange={evt => setValues({...values, first_name: evt.target.value})} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          name="last_name"
          placeholder="Last name"
          value={values.last_name}
          onChange={evt => setValues({...values, last_name: evt.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={evt => setValues({...values, email: evt.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="avatar">Avatar link</label>
        <input
          type="text"
          className="form-control"
          id="avatar"
          name="avatar"
          placeholder="Avatar link"
          value={values.avatar}
          onChange={evt => setValues({...values, avatar: evt.target.value})}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary mb-2">Add</button>
    </form>
  );
}

export default Form;