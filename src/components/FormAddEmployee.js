import { useState } from "react";
import React from "react";
import Button from "./Button";

const FormAddEmployee = ({ onAddEmployee, onSubmit }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState();
  const [salaryDate, setSalaryDate] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !salaryDate || !salary) return;

    const newEmployee = {
      id: crypto.randomUUID(),
      name,
      balance: 0,
      salary,
      salaryDate,
    };

    onAddEmployee(newEmployee);

    setName("");
    setSalary("");
    setSalaryDate("");
    onSubmit(false);
  }

  return (
    <form className="form-add-emp" onSubmit={handleSubmit}>
      <div className="form-add-emp-in">
        <label>Emri</label>
        <input
          type="text"
          placeholder="Sheno emrin"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Shuma e pages</label>
        <input
          type="number"
          min={1}
          max={1000}
          placeholder="Sheno shumen e pages"
          value={salary}
          onChange={(e) => setSalary(Math.abs(e.target.value))}
        />

        <label>Data e pageses</label>
        <input
          type="number"
          min={1}
          max={31}
          placeholder="Sheno daten e pageses"
          value={salaryDate}
          onChange={(e) => setSalaryDate(Math.abs(e.target.value))}
        />

        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default FormAddEmployee;
