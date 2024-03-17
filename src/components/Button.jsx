export default function Button({ onClick,buttonType,children,text }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
      {text}
    </button>
  );
}
