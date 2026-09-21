import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    if (window.paypal && window.paypal.HostedButtons) {
      window.paypal.HostedButtons({
        hostedButtonId: "PLDUTTW4EA9B6",
      }).render("#paypal-container-PLDUTTW4EA9B6");
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <div id="paypal-container-PLDUTTW4EA9B6"></div>
    </div>
  );
};

export default PayPalButton;
