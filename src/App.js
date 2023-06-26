import React from "react";
import { useState } from "react";
import Button from "./components/Button";
import EmpList from "./components/EmpList";
import FormAddMoney from "./components/FormAddMoney";
import FormAddEmployee from "./components/FormAddEmployee";

const initialEmp = [
  {
    id: 118836,
    name: "Rinori",
    balance: 0,
    salary: 1000,
    salaryDate: 2,
  },
  {
    id: 933372,
    name: "Emrushi",
    balance: 0,
    salary: 800,
    salaryDate: 24,
  },
  {
    id: 499476,
    name: "Alma",
    balance: 0,
    salary: 500,
    salaryDate: 12,
  },
];

const App = () => {
  const [employees, setEmployees] = useState(initialEmp);
  const [showAddEmployee, setShowAddEmloyee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleShowAddEmployee() {
    setShowAddEmloyee((show) => !show);
    setSelectedEmployee(false);
  }

  function handleSelection(employee) {
    setSelectedEmployee((cur) => (cur?.id === employee.id ? null : employee));
    setShowAddEmloyee(false);
  }

  function handleAddEmployee(newEmployee) {
    setEmployees((employees) => [...employees, newEmployee]);
  }

  function handleDeleteEmployee(id) {
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  function handleAddMoney(value) {
    setEmployees((employees) =>
      employees.map((employee) =>
        employee.id === selectedEmployee.id
          ? {
              ...employee,
              balance: employee.balance + value,
              salary: employee.salary - (employee.balance + value),
            }
          : employee
      )
    );
    setSelectedEmployee(false);
  }

  // function handleReset(id) {
  //   setEmployees((employees) =>
  //     employees.map((employee) =>
  //       employee.id === id
  //         ? {
  //             ...employee,
  //             balance: 0,
  //             salary: 0,
  //             salaryDate: "",
  //           }
  //         : employee
  //     )
  //   );
  // }

  return (
    <div className="container">
      <EmpList
        employees={employees}
        onSelection={handleSelection}
        selectedEmployee={selectedEmployee}
        employee={employees}
        onDelete={handleDeleteEmployee}
        // onReset={handleReset}
      />

      {selectedEmployee && (
        <FormAddMoney
          onAddMoney={handleAddMoney}
          selectedEmployee={selectedEmployee}
        />
      )}

      {showAddEmployee && (
        <FormAddEmployee
          onSubmit={setShowAddEmloyee}
          onAddEmployee={handleAddEmployee}
        />
      )}
      <Button onClick={handleShowAddEmployee}>Shto puntor</Button>
    </div>
  );
};

export default App;
