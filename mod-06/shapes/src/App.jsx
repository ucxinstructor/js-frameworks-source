import React, { useState } from 'react';
import FitnessTracker from './FitnessTracker.jsx';
import TodoList from './TodoList.jsx';
import StateShapesDemo from './StateShapesDemo.jsx';
import ProductListDisplay from './ProductListDisplay.jsx';

export default function App() {
  const [active, setActive] = useState('Fitness');
  const demos = {
    'State Shapes': <StateShapesDemo />,
    'Products': <ProductListDisplay />,
    'Todo': <TodoList />,
    'Fitness': <FitnessTracker />,
  };
  
  return (
    <div style={{padding: 20}}>
      <h1>State Shapes Demos</h1>
      <nav style={{marginBottom: 20}}>
        {Object.keys(demos).map(d => (
          <button 
            key={d} 
            onClick={() => setActive(d)}
            style={{
              marginRight: 10, 
              background: active === d ? '#007bff' : '#eee',
              padding: 8,                    // ← Added
              border: 'none',                 // ← Added
              borderRadius: 4                 // ← Added
            }}
          >
            {d}
          </button>
        ))}
      </nav>
      <div style={{border: '2px solid #ccc', padding: 20}}>
        {demos[active]}
      </div>
    </div>
  );
}
