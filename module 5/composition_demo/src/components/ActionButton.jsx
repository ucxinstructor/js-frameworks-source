export default function ActionButton({
  children,
  variant = "setup",
  onClick = () => {console.log("Button clicked!")},
}) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
