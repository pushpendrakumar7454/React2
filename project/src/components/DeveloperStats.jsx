import {
  FaRocket,
  FaBookmark,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const DeveloperStats = () => {
  // Founder ke total startups
  const startups = useSelector((state) => state.startup.startup);

  // Developer Redux State
  const { bookMarks, applications, likeStartups } = useSelector(
    (state) => state.developer
  );

  const stats = [
    {
      title: "Available Startups",
      value: startups.length,
      icon: <FaRocket />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Bookmarks",
      value: bookMarks.length,
      icon: <FaBookmark />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Applied",
      value: applications.length,
      icon: <FaPaperPlane />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Liked",
      value: likeStartups.length,
      icon: <FaHeart />,
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div
            className={`h-12 w-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-xl text-white`}
          >
            {item.icon}
          </div>

          <h3 className="mt-5 text-slate-400 text-sm">
            {item.title}
          </h3>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {item.value}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default DeveloperStats;