export default function GameLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Galaxy Squad</h2>

        <p>Characters</p>
        <p>Missions</p>
        <p>Inventory</p>
      </aside>

      <main className="content">
        <h1>Team Dashboard</h1>

        <div className="card-grid">
          {children}
        </div>
      </main>
    </div>
  );
}
