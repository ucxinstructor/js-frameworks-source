import React, { useState } from 'react';  

export default function FitnessTracker() {
  const [workouts, setWorkouts] = useState([    // Source state
    { name: "Run", duration: 30, calories: 300 },
    { name: "Weights", duration: 45, calories: 400 },
    { name: "Yoga", duration: 20, calories: 150 }
  ]);

  // DERIVED STATE (computed from source)
  const totalDuration = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);
  const avgCaloriesPerMin = totalCalories / totalDuration || 0;
  const longestWorkout = Math.max(...workouts.map(w => w.duration));
  const hasCardio = workouts.some(w => w.name.toLowerCase().includes('run'));

  const logWorkout = () => {
    setWorkouts(prev => [...prev, { 
      name: "Swim", duration: 35, calories: 350 
    }]);
  };

  return (
    <div className="fitness-tracker">
      <h3>Today's Workouts</h3>
      <h4>Dervied State Example</h4>
      <p>Source state: workouts array</p>
      <p>Derived state: total duration, total calories, avg calories/min, longest workout, cardio status</p>  
      <ul>
        {workouts.map((w, i) => (
          <li key={i}>{w.name}: {w.duration}min ({w.calories} cal)</li>
        ))}
      </ul>
      
      <div className="stats">
        <strong>Total:</strong> {totalDuration}min, {totalCalories} calories<br/>
        <strong>Avg:</strong> {avgCaloriesPerMin.toFixed(1)} cal/min<br/>
        Longest: {longestWorkout}min | {hasCardio ? "✅ Cardio done" : "❌ Add cardio"}
      </div>
      
      <button onClick={logWorkout}>Log Swim</button>
    </div>
  );
}
