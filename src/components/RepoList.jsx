import { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import LanguageChart from "./LanguageChart";

function RepoList({ username, darkMode }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("stars");

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
        );
        if (!response.ok) {
          setError("Could not fetch repositories 😕");
          return;
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError("Network error! 🌐");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const languages = [
    "All",
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ];

  const filteredRepos = repos
    .filter((r) => filter === "All" || r.language === filter)
    .sort((a, b) =>
      sort === "stars"
        ? b.stargazers_count - a.stargazers_count
        : new Date(b.updated_at) - new Date(a.updated_at),
    );

  return (
    <div className="mt-6">
      <LanguageChart repos={repos} darkMode={darkMode} />

      {/* Filter + Sort */}
      <div className="flex flex-wrap gap-2 mt-6 mb-4 justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filter === lang
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : darkMode
                    ? "glass text-gray-300 hover:bg-white/10"
                    : "glass-light text-gray-600 hover:bg-white/80"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={`px-3 py-1 rounded-xl text-xs transition-all ${
            darkMode ? "glass text-white" : "glass-light text-gray-800"
          }`}
        >
          <option value="stars">⭐ Most Starred</option>
          <option value="updated">🕐 Recently Updated</option>
        </select>
      </div>

      {loading && (
        <p className="text-blue-400 text-center">Loading repos... ⏳</p>
      )}
      {error && <p className="text-red-400 text-center">{error}</p>}
      {!loading && filteredRepos.length === 0 && (
        <p
          className={`text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          No repositories found 😕
        </p>
      )}

      <div className="flex flex-col gap-4">
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
