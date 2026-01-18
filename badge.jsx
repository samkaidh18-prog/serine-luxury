
export function Badge({ children, className = "" }) {
  return (
    <span className={`px-3 py-1 text-xs rounded-full ${className}`}>
      {children}
    </span>
  );
}
