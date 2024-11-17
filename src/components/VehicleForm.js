import React, { useState } from 'react';

const VehicleForm = ({ onAddVehicle }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVehicle({ name });
    setName('');
  };

  return (
    <div className="vehicle-form">
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle Name (e.g., Car, Truck)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default VehicleForm;
