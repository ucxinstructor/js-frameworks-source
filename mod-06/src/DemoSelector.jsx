import React, { useState } from 'react';
// 
export default function DemoSelector() {
  const [activeDemo, setActiveDemo] = useState('primitive');
  
  const demos = {
    primitive: <PrimitiveDemo />,
    object: <ObjectDemo />,
    array: <ArrayDemo />,
    derived: <DerivedDemo />
  };

  return (
    <div>
      <nav>
        {Object.keys(demos).map(demo => (
          <button key={demo} onClick={() => setActiveDemo(demo)}>
            {demo}
          </button>
        ))}
      </nav>
      <div style={{padding: '20px', border: '1px solid #ccc'}}>
        {demos[activeDemo]}
      </div>
    </div>
  );
}
