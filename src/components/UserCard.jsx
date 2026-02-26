function UserCard({ user, darkMode }) {
  return (
    <div
      className={`mt-8 rounded-3xl p-6 flex gap-6 items-center shadow-2xl transition-all ${
        darkMode ? "glass text-white" : "glass-light text-gray-800"
      }`}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-2xl border-2 border-blue-400 shadow-lg shadow-blue-500/30"
      />

      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 text-sm transition"
        >
          @{user.login}
        </a>
        {user.bio && (
          <p
            className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {user.bio}
          </p>
        )}
        {user.location && (
          <p
            className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            📍 {user.location}
          </p>
        )}

        <div className="flex gap-4 mt-2">
          {[
            { label: "Repos", value: user.public_repos },
            { label: "Followers", value: user.followers },
            { label: "Following", value: user.following },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`px-4 py-2 rounded-xl text-center ${
                darkMode ? "bg-white/10" : "bg-black/10"
              }`}
            >
              <p className="text-lg font-bold">{stat.value}</p>
              <p
                className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
