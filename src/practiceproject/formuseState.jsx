import React, { useState, useEffect } from 'react';

function FormuseState() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

 
  useEffect(() => {
    const data = localStorage.getItem('submittedData');
    if (data) {
      setSubmittedData(JSON.parse(data));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
  }, [submittedData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {submittedData.map((data, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '200px' }}>
            <h4>User {index + 1}</h4>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Password:</strong> {data.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormuseState;


