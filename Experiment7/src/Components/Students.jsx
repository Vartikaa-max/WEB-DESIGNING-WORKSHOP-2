import React from 'react'

// Props Method 1: Using props object

function Students({ name, age, physics, chemistry, maths }) {
  const total = physics + chemistry + maths;
  const percentage = (total / 3).toFixed(2);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>

      <div className="marks">
        <p>Physics: {physics}</p>
        <p>Chemistry: {chemistry}</p>
        <p>Maths: {maths}</p>
      </div>
      <div className="result">
        <p>Total: {total}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    </div>
  );
}

export default Students;

// Props Method 2: Using destructuring assignment
/*
function Student({ name, age }) {
  return (
    <div>
      <h1>Your name is: {name}</h1>
      <p>Your age is: {age}</p>
    </div>
  )
}
export default Students;
*/