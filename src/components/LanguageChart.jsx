import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
];

function LanguageChart({ repos, darkMode }) {

  const langCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });


  const data = Object.entries(langCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8); // top 8 languages

  if (data.length === 0) return null;

  return (
    <div
      className={`max-w-2xl mx-auto mt-6 rounded-2xl p-6 shadow-lg transition ${
        darkMode ? "glass bg-gray-800" : "glass-light bg-white"
      }`}
    >
      <h3
        className={`text-xl font-bold mb-4 ${darkMode ? " text-white" : " text-gray-800"}`}
      >
        Top Languages 📊
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1f2937" : "#fff",
              border: "none",
              borderRadius: "8px",
              color: darkMode ? "#fff" : "#111",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageChart;
