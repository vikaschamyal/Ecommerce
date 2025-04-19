import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FakePayment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      navigate("/checkout-success", { state });
    }, 2000);
  };

  return (
    <div>
      <h2>Fake Payment Gateway</h2>
      <p>Amount to Pay: ${state?.totalPrice}</p>
      <button onClick={handlePaymentSuccess}>Simulate Payment</button>
    </div>
  );
};

export default FakePayment;
