import React from "react";

import Button from "./Button";
const Employee = ({
  employee,
  onSelection,
  selectedEmployee,
  onDelete,
  // onReset,
}) => {
  const isSelected = selectedEmployee?.id === employee.id;

  return (
    <li
      className={isSelected ? "employee selected" : "employee"}
      key={employee.id}
    >
      <div className="employee-single">
        {" "}
        <h3>{employee.name}</h3>
        {employee.salary === 0 ? (
          <p className="red">{employee.name} e ka marr tere pagen</p>
        ) : (
          ""
        )}
        {employee.balance === 0 && (
          <div>
            <p>{employee.name} nuk ka marre ende para nga paga</p>
            <p>
              Paga e mbetur {employee.salary} merret me t'
              {employee.salaryDate}
              -tin
            </p>
          </div>
        )}
        {employee.balance > 0 && employee.balance < employee.salary && (
          <div>
            {" "}
            <p className="green">
              {employee.name} i ka marr {Math.abs(employee.balance)}$
            </p>
            <p>
              Paga e mbetur {employee.salary} merret me t'
              {employee.salaryDate}
              -tin
            </p>
          </div>
        )}
      </div>
      <div className="buttons">
        <Button onClick={() => onSelection(employee)}>
          {isSelected ? "Mbyll" : "Shto para"}
        </Button>
        <Button onClick={() => onDelete(employee.id)}>Fshij puntorin</Button>
      </div>
    </li>
  );
};

export default Employee;
