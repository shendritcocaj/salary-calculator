import React, { useState } from "react";
import Button from "./Button";

const FormAddMoney = ({ selectedEmployee, onAddMoney }) => {
  const [balance, setBalance] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!balance) return;
    onAddMoney(balance);
  }

  return (
    <form className="form-add-emp" onSubmit={handleSubmit}>
      <div className="form-add-emp-in">
        <label>
          <p>Shuma e parave qe merr {selectedEmployee.name}</p>
        </label>
        <input
          type="number"
          min={1}
          max={selectedEmployee.salary}
          placeholder="Sheno shumen e parave"
          value={balance}
          onChange={(e) => setBalance(Math.abs(e.target.value))}
        />

        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default FormAddMoney;
