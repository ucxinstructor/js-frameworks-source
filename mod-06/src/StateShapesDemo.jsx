import React, { useState } from 'react';  

export default function StateShapesDemo() {
  // PRIMITIVE: Theme toggle
  const [theme, setTheme] = useState('light');
  
  // OBJECT: Player profile (related game fields)
  const [player, setPlayer] = useState({ 
    name: "Hero", 
    level: 1, 
    health: 100 
  });
  
  // ARRAY: Inventory items
  const [inventory, setInventory] = useState(['sword', 'potion']);

  const levelUp = () => {
    setPlayer({ ...player, level: player.level + 1, health: player.health + 50 });
  };

  const addLoot = () => {
    setInventory([...inventory, `loot-${inventory.length + 1}`]);
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : ''}>
      <h3>Primitive: Theme</h3>
      <h4>Single value: 'light' or 'dark'</h4>
      <p>Current: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle
      </button>

      <h3>Object: Player Profile</h3>
      <h4>Related fields: name, level, health</h4>
      <p>{player.name} (Lv.{player.level}, HP: {player.health})</p>
      <button onClick={levelUp}>Level Up!</button>

      <h3>Array: Inventory</h3>
      <h4>List of items the player has</h4>
      <ul>
        {inventory.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={addLoot}>Find Loot!</button>
    </div>
  );
}
