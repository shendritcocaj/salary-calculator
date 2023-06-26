import React from "react";

import Button from "./Button";
const Employee = ({ employee, onSelection, selectedEmployee }) => {
  const isSelected = selectedEmployee?.id === employee.id;
  return (
    <li
      className={isSelected ? "employee selected" : "employee"}
      key={employee.id}
    >
      <div className="employee-single">
        {" "}
        <h3>{employee.name}</h3>
        {employee.balance < 0 && (
          <div>
            <p className="red">
              {employee.name} i ka borgj {Math.abs(employee.balance)}$
            </p>{" "}
            <p>
              Paga merret me t'
              {employee.salaryDate}
              -tin
            </p>
          </div>
        )}
        {employee.balance === 0 ? (
          <div>
            <p>{employee.name} nuk ka marre ende para nga paga</p>
            <p>
              Paga e mbetur {employee.salary} merret me t'
              {employee.salaryDate}
              -tin
            </p>
          </div>
        ) : (
          ""
        )}
        {employee.balance > 0 && (
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
        <Button>Fshij puntorin</Button>
      </div>
    </li>
  );
};

export default Employee;
