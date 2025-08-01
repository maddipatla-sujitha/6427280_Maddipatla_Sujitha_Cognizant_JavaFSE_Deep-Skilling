import React from 'react';

const GuestPage = () => {
  const flights = [
    { flightNo: 'AI101', destination: 'Delhi', price: 4500 },
    { flightNo: 'AI102', destination: 'Mumbai', price: 4000 },
    { flightNo: 'AI103', destination: 'Chennai', price: 5000 }
  ];

  return (
    <div>
      <h2>Flight Details</h2>
      <table border="1" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Destination</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.flightNo}</td>
              <td>{flight.destination}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ color: 'red', fontStyle: 'italic' }}>
        *Login to book tickets
      </p>
    </div>
  );
};

export default GuestPage;
