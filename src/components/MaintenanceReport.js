import React from 'react';

const MaintenanceReport = ({ maintenanceRecords }) => {
  const totalCost = maintenanceRecords.reduce((acc, record) => acc + record.cost, 0);
  const totalTasks = maintenanceRecords.length;

  return (
    <div className="maintenance-report">
      <h2>Maintenance Summary</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default MaintenanceReport;
