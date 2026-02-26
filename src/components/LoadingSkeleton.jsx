function LoadingSkeleton({ darkMode }) {
  return (
    <div className="mt-8 animate-pulse">
      {/* User Card Skeleton */}
      <div
        className={`rounded-3xl p-6 flex gap-6 items-center shadow-2xl ${
          darkMode ? "glass" : "glass-light"
        }`}
      >
        <div
          className={`w-24 h-24 rounded-2xl ${darkMode ? "bg-white/10" : "bg-black/10"}`}
        />

        <div className="flex flex-col gap-3 flex-1">
          <div
            className={`h-6 rounded-xl w-48 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
          />
          <div
            className={`h-4 rounded-xl w-32 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
          />
          <div
            className={`h-4 rounded-xl w-64 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
          />
          <div className="flex gap-4 mt-1">
            <div
              className={`h-12 w-16 rounded-xl ${darkMode ? "bg-white/10" : "bg-black/10"}`}
            />
            <div
              className={`h-12 w-16 rounded-xl ${darkMode ? "bg-white/10" : "bg-black/10"}`}
            />
            <div
              className={`h-12 w-16 rounded-xl ${darkMode ? "bg-white/10" : "bg-black/10"}`}
            />
          </div>
        </div>
      </div>

      {/* Repo Skeletons */}
      <div className="flex flex-col gap-4 mt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-2xl p-4 flex flex-col gap-3 ${
              darkMode ? "glass" : "glass-light"
            }`}
          >
            <div
              className={`h-5 rounded-xl w-40 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
            />
            <div
              className={`h-4 rounded-xl w-72 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
            />
            <div className="flex gap-4">
              <div
                className={`h-4 rounded-xl w-20 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
              />
              <div
                className={`h-4 rounded-xl w-16 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
