import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  
  const paymentMethods = [
    'Credit Card',
    'Debit Card',
    'PayPal',
    'Apple Pay',
    'Google Pay',
    'Bank Transfer',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment Method Selected: ${selectedPaymentMethod}`);
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <div className="payment-methods">
          {paymentMethods.map((method, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={method}
                  checked={selectedPaymentMethod === method}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                />
                {method}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" disabled={!selectedPaymentMethod}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
