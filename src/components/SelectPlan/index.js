import React from 'react';
import './index.css';

function SelectPlan({ onPreviousStep, onNextStep }) {
  return (
    <div className="step">
      <h2>Select Plan</h2>
      <form>
        <label htmlFor="billingPlan">Select your plan</label>
        <select id="billingPlan">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>

        <label>Billing Plan</label>
        <div>
          <input type="radio" id="monthly" name="billing" value="monthly" />
          <label htmlFor="monthly">Monthly</label>
          <input type="radio" id="yearly" name="billing" value="yearly" />
          <label htmlFor="yearly">Yearly</label>
        </div>

        <button onClick={onPreviousStep}>Go Back</button>
        <button onClick={onNextStep}>Next Step</button>
      </form>
    </div>
  );
}

export default SelectPlan;
