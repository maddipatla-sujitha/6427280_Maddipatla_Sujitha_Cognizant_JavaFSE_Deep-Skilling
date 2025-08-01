import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Synthetic event handling
    const rate = 0.011; // Example conversion rate
    const result = (parseFloat(inr) * rate).toFixed(2);
    setEuro(result);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>Currency Converter (INR → Euro)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          INR:
          <input
            type="number"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            required
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Equivalent in Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConverter;
