import React, { useState } from "react";

const OrderForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className="mt-4 row justify-content-center align-items-center">
      <div className="col-4 d-flex gap-4">
        <input
          type="checkbox"
          id="kosullar"
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="kosullar">Kosulları okudum ve kabul ediyorum</label>
      </div>
      <button
        className="btn btn-warning col-2 col-sm-2 col-md-1"
        disabled={!isChecked}
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default OrderForm;
