export default function CharacterCard({
  name,
  role,
  power,
  children,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        <strong>Role:</strong> {role}
      </p>

      <p>
        <strong>Power:</strong> {power}
      </p>

      <div className="actions">
        {children}
      </div>
    </div>
  );
}
