function ErrorMessage({ message, darkMode }) {
  if (!message) return null;

  return (
    <div
      className={`mt-8 p-4 rounded-2xl text-center border transition-all ${
        darkMode
          ? "bg-red-500/10 border-red-500/20 text-red-400"
          : "bg-red-100 border-red-200 text-red-500"
      }`}
    >
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}

export default ErrorMessage;
