import React from 'react';

const UserPage = () => {
  const flights = [
    { flightNo: 'AI101', destination: 'Delhi', price: 4500 },
    { flightNo: 'AI102', destination: 'Mumbai', price: 4000 },
    { flightNo: 'AI103', destination: 'Chennai', price: 5000 }
  ];

  const handleBooking = (flight) => {
    alert(`Ticket booked for ${flight.flightNo} to ${flight.destination}`);
  };

  return (
    <div>
      <h2>Book Your Flight</h2>
      <table border="1" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Destination</th>
            <th>Price (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.flightNo}</td>
              <td>{flight.destination}</td>
              <td>{flight.price}</td>
              <td>
                <button onClick={() => handleBooking(flight)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
