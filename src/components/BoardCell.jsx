export default function BoardCell({ children, ...props }) {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
}
