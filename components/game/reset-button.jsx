export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-2.5 py-1 px-4 bg-transparent border border-gray-400 rounded-lg"
      onClick={onClick}
    >
      Reset
    </button>
  );
}
