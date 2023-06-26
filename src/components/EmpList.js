import React from "react";
import Employee from "./Employee";

const EmpList = ({ employees, onSelection, selectedEmployee }) => {
  return (
    <div className="employees">
      <h3>Llogaritesi i pages</h3>

      {employees.map((employee, i) => (
        <Employee
          key={i}
          employee={employee}
          onSelection={onSelection}
          selectedEmployee={selectedEmployee}
        />
      ))}
    </div>
  );
};

export default EmpList;
