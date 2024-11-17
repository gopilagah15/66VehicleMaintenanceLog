import React, { useState } from 'react';

const MaintenanceForm = ({ vehicles, onAddMaintenance }) => {
  const [vehicleName, setVehicleName] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [task, setTask] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMaintenance({
      vehicleName,
      serviceDate,
      task,
      cost: parseFloat(cost),
    });
    setVehicleName('');
    setServiceDate('');
    setTask('');
    setCost('');
  };

  return (
    <div className="maintenance-form">
      <h2>Log Maintenance Task</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
          required
        >
          <option value="">Select Vehicle</option>
          {vehicles.map((vehicle, index) => (
            <option key={index} value={vehicle.name}>
              {vehicle.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Maintenance Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
        <button type="submit">Add Maintenance</button>
      </form>
    </div>
  );
};

export default MaintenanceForm;
