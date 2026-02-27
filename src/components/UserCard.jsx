function UserCard({ user, darkMode }) {
  return (
    <div
      className={`mt-8 rounded-3xl p-5 shadow-2xl transition-all w-full ${
        darkMode ? "glass text-white" : "glass-light text-gray-800"
      }`}
    >
      {/* Avatar + Info — full center */}
      <div className="flex flex-col items-center text-center gap-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-2xl border-2 border-blue-400 shadow-lg"
        />
        <h2 className="text-xl font-bold">{user.name || user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          className="text-blue-400 text-sm"
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
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {[
          { label: "Repos", value: user.public_repos },
          { label: "Followers", value: user.followers },
          { label: "Following", value: user.following },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`py-3 rounded-xl text-center ${
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
  );
}

export default UserCard;
