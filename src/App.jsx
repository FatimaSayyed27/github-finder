import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setError("User not found 😕 Check the username!");
        return;
      }
      if (response.status === 403) {
        setError("API rate limit exceeded ⏳ Try after sometime!");
        return;
      }
      if (!response.ok) {
        setError("Something went wrong! Try again 😵");
        return;
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError("Network error! Check your internet connection 🌐");
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${darkMode ? "" : "light-bg"}`}
    >
      <div className="w-full max-w-2xl mx-auto px-4 pb-20 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center text-center pt-10 mb-8">
          <h1
            className={`text-6xl font-bold tracking-tight italic ${darkMode ? "text-white" : "text-gray-800"}`}
          >
            GitHub Finder
          </h1>
          <p
            className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Search any GitHub profile instantly 🚀
          </p>
        </div>

        <SearchBar
          onSearch={handleSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {loading && <LoadingSkeleton darkMode={darkMode} />}
        <ErrorMessage message={error} darkMode={darkMode} />

        {user && <UserCard user={user} darkMode={darkMode} />}
        {user && <RepoList username={user.login} darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
