import React from 'react';

const MaintenanceList = ({ maintenanceRecords }) => {
  return (
    <div className="maintenance-list">
      <h2>Maintenance Records</h2>
      {maintenanceRecords.length === 0 ? (
        <p>No maintenance records available.</p>
      ) : (
        <ul>
          {maintenanceRecords.map((record, index) => (
            <li key={index}>
              <strong>Vehicle:</strong> {record.vehicleName} <br />
              <strong>Date:</strong> {record.serviceDate} <br />
              <strong>Task:</strong> {record.task} <br />
              <strong>Cost:</strong> ${record.cost.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MaintenanceList;
