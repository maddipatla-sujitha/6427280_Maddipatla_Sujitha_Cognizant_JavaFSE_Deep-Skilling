import React from 'react';

const OfficeSpace = () => {
  // Step 1: Office object
  const office = {
    name: 'Tech Park - Tower A',
    rent: 55000,
    address: 'MG Road, Bangalore',
    image: 'https://via.placeholder.com/300x150?text=Office+Space'
  };

  // Step 2: List of office objects
  const offices = [
    { name: 'Tech Park - Tower A', rent: 55000, address: 'MG Road, Bangalore' },
    { name: 'Innovation Hub', rent: 75000, address: 'Whitefield, Bangalore' },
    { name: 'Corporate Plaza', rent: 60000, address: 'Electronic City, Bangalore' },
    { name: 'Startup Space', rent: 45000, address: 'HSR Layout, Bangalore' }
  ];

  // Step 3: Inline styling (conditional)
  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  // JSX Rendering
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Single Office Example */}
      <img src={office.image} alt="Office Space" style={{ width: '300px', height: '150px' }} />
      <h2>{office.name}</h2>
      <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>

      {/* List of Offices */}
      <h2>Available Offices</h2>
      <ul>
        {offices.map((off, index) => (
          <li key={index}>
            <h3>{off.name}</h3>
            <p style={getRentStyle(off.rent)}>Rent: ₹{off.rent}</p>
            <p>{off.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeSpace;
