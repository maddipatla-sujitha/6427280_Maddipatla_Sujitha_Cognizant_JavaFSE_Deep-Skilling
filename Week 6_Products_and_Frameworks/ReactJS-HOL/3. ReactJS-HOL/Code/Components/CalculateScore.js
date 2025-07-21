import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal.toFixed(2) + '%');
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

function CalculateScore({ Name, School, total, goal }) {
  return (
    <div className="formatstyle">
      <h1 style={{ color: 'brown' }}>Student Details:</h1>

      <div className="Name">
        <b>Name:</b> {Name}
      </div>

      <div className="School">
        <b>School:</b> {School}
      </div>

      <div className="Total">
        <b>Total Marks:</b> {total}
      </div>

      <div className="Score">
        <b>Average Score:</b> {calcScore(total, goal)}
      </div>
    </div>
  );
}

export default CalculateScore;
