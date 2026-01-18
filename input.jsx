
export function Input(props) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 rounded-xl bg-black border border-white/10 text-white ${props.className || ""}`}
    />
  );
}
