function RepoCard({ repo, darkMode }) {
  return (
    <div
      className={`rounded-2xl p-4 flex flex-col gap-2 transition-all hover:scale-[1.01] hover:shadow-lg ${
        darkMode
          ? "glass text-white hover:shadow-blue-500/10"
          : "glass-light text-gray-800"
      }`}
    >
      <a
        href={repo.html_url}
        target="_blank"
        className="text-blue-400 hover:text-blue-300 font-semibold text-base transition"
      >
        {repo.name}
      </a>

      {repo.description && (
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {repo.description}
        </p>
      )}

      <div
        className={`flex gap-4 mt-1 text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      >
        {repo.language && (
          <span className="text-yellow-400 font-medium">● {repo.language}</span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </div>
  );
}

export default RepoCard;
