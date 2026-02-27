import { useState } from "react";

function SearchBar({ onSearch, darkMode, setDarkMode }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (username.trim() === "") {
      setError("Please enter a username ⚠️");
      return;
    }
    setError("");
    onSearch(username.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Input + Search button */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex-1 min-w-0 px-5 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${
            darkMode
              ? "glass text-white placeholder-gray-400"
              : "glass-light text-gray-800 placeholder-gray-400"
          }`}
        />
        <button
          onClick={handleSearch}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* Toggle button — full width neeche */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-full py-2 rounded-2xl font-medium text-sm transition-all ${
          darkMode
            ? "glass text-white hover:bg-white/10"
            : "glass-light text-gray-800 hover:bg-white/80"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}

export default SearchBar;
