import React, { useState, useEffect } from 'react';
import VehicleForm from './components/VehicleForm';
import MaintenanceForm from './components/MaintenanceForm';
import MaintenanceList from './components/MaintenanceList';
import MaintenanceReport from './components/MaintenanceReport';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);

  // Load data from LocalStorage
  useEffect(() => {
    const savedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const savedRecords = JSON.parse(localStorage.getItem('maintenanceRecords')) || [];
    setVehicles(savedVehicles);
    setMaintenanceRecords(savedRecords);
  }, []);

  // Save data to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    localStorage.setItem('maintenanceRecords', JSON.stringify(maintenanceRecords));
  }, [vehicles, maintenanceRecords]);

  const handleAddVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  const handleAddMaintenance = (record) => {
    setMaintenanceRecords([...maintenanceRecords, record]);
  };

  return (
    <div className="app">
      <h1>Vehicle Maintenance Log</h1>
      <VehicleForm onAddVehicle={handleAddVehicle} />
      <MaintenanceForm vehicles={vehicles} onAddMaintenance={handleAddMaintenance} />
      <MaintenanceList maintenanceRecords={maintenanceRecords} />
      <MaintenanceReport maintenanceRecords={maintenanceRecords} />
    </div>
  );
};

export default App;
