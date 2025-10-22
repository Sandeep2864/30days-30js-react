import React, { useState } from "react";
import "tailwindcss/tailwind.css";
// Removed dependency on external CSS files, relying entirely on Tailwind CSS utility classes.
// The "tailwindcss/tailwind.css" import is also not strictly necessary in this environment
// but is kept for context, as the classes are assumed to be loaded.

// --- Component Placeholders (Day 01 to Day 30) ---
// Each component function is defined below, ready to be replaced with the actual project logic.

const PlaceholderBox = ({ day, color, title }) => (
  <div className={`p-8 text-center ${color} rounded-xl shadow-inner border border-current/50 min-w-full max-w-lg transition transform hover:scale-[1.01] duration-300`}>
    <h3 className="text-2xl font-bold mb-2 text-white">{day}</h3>
    <p className="text-lg text-gray-300">{title} Content Goes Here.</p>
    <p className="mt-4 text-sm text-yellow-300">Start coding your project inside this component!</p>
  </div>
);

const Day01 = () => <PlaceholderBox day="Day 01" color="bg-blue-900/50" title="Counter App" />;
const Day02 = () => <PlaceholderBox day="Day 02" color="bg-green-900/50" title="To Do List" />;
const Day03 = () => <PlaceholderBox day="Day 03" color="bg-yellow-900/50" title="Reviews Carousel" />;
const Day04 = () => <PlaceholderBox day="Day 04" color="bg-red-900/50" title="Accordion/FAQ" />;
const Day05 = () => <PlaceholderBox day="Day 05" color="bg-purple-900/50" title="Menu Filters" />;
const Day06 = () => <PlaceholderBox day="Day 06" color="bg-indigo-900/50" title="Tabs Component" />;
const Day07 = () => <PlaceholderBox day="Day 07" color="bg-pink-900/50" title="Image Slider" />;
const Day08 = () => <PlaceholderBox day="Day 08" color="bg-teal-900/50" title="Lorem Ipsum Gen." />;
const Day09 = () => <PlaceholderBox day="Day 09" color="bg-cyan-900/50" title="Color Palette Gen." />;
const Day10 = () => <PlaceholderBox day="Day 10" color="bg-lime-900/50" title="Grocery Bud (CRUD)" />;
const Day11 = () => <PlaceholderBox day="Day 11" color="bg-orange-900/50" title="Sticky Navbar" />;
const Day12 = () => <PlaceholderBox day="Day 12" color="bg-blue-900/50" title="Sidebar/Modal" />;
const Day13 = () => <PlaceholderBox day="Day 13" color="bg-green-900/50" title="Stripe Submenu Clone" />;
const Day14 = () => <PlaceholderBox day="Day 14" color="bg-yellow-900/50" title="Shopping Cart" />;
const Day15 = () => <PlaceholderBox day="Day 15" color="bg-red-900/50" title="Cocktail Search" />;
const Day16 = () => <PlaceholderBox day="Day 16" color="bg-purple-900/50" title="Pagination" />;
const Day17 = () => <PlaceholderBox day="Day 17" color="bg-indigo-900/50" title="Random User Card" />;
const Day18 = () => <PlaceholderBox day="Day 18" color="bg-pink-900/50" title="Scroll Indicator" />;
const Day19 = () => <PlaceholderBox day="Day 19" color="bg-teal-900/50" title="Color Flipper" />;
const Day20 = () => <PlaceholderBox day="Day 20" color="bg-cyan-900/50" title="Movie DB Search" />;
const Day21 = () => <PlaceholderBox day="Day 21" color="bg-lime-900/50" title="Weather App" />;
const Day22 = () => <PlaceholderBox day="Day 22" color="bg-orange-900/50" title="Quiz App" />;
const Day23 = () => <PlaceholderBox day="Day 23" color="bg-blue-900/50" title="Feedback UI" />;
const Day24 = () => <PlaceholderBox day="Day 24" color="bg-green-900/50" title="Expense Tracker" />;
const Day25 = () => <PlaceholderBox day="Day 25" color="bg-yellow-900/50" title="Birthday Reminder" />;
const Day26 = () => <PlaceholderBox day="Day 26" color="bg-red-900/50" title="Stopwatch" />;
const Day27 = () => <PlaceholderBox day="Day 27" color="bg-purple-900/50" title="Dad Jokes" />;
const Day28 = () => <PlaceholderBox day="Day 28" color="bg-indigo-900/50" title="Movie Seat Booking" />;
const Day29 = () => <PlaceholderBox day="Day 29" color="bg-pink-900/50" title="Typing Speed Test" />;
const Day30 = () => <PlaceholderBox day="Day 30" color="bg-teal-900/50" title="Music Player" />;


// --- Project List Data (Correctly Mapped) ---
const projectList = [
  { id: "day01", title: "Day 01: Counter App", component: Day01 },
  { id: "day02", title: "Day 02: ToDo List", component: Day02 },
  { id: "day03", title: "Day 03: Reviews Carousel", component: Day03 },
  { id: "day04", title: "Day 04: Accordion/FAQ", component: Day04 },
  { id: "day05", title: "Day 05: Menu Filters", component: Day05 },
  { id: "day06", title: "Day 06: Tabs Component", component: Day06 },
  { id: "day07", title: "Day 07: Image Slider", component: Day07 },
  { id: "day08", title: "Day 08: Lorem Ipsum Gen.", component: Day08 },
  { id: "day09", title: "Day 09: Color Palette Gen.", component: Day09 },
  { id: "day10", title: "Day 10: Grocery Bud (CRUD)", component: Day10 },
  { id: "day11", title: "Day 11: Sticky Navbar", component: Day11 },
  { id: "day12", title: "Day 12: Modal/Sidebar", component: Day12 },
  { id: "day13", title: "Day 13: Stripe Submenu Clone", component: Day13 },
  { id: "day14", title: "Day 14: Shopping Cart", component: Day14 },
  { id: "day15", title: "Day 15: Cocktail Search", component: Day15 },
  { id: "day16", title: "Day 16: Pagination", component: Day16 },
  { id: "day17", title: "Day 17: Random User Card", component: Day17 },
  { id: "day18", title: "Day 18: Scroll Indicator", component: Day18 },
  { id: "day19", title: "Day 19: Color Flipper", component: Day19 },
  { id: "day20", title: "Day 20: Movie DB Search", component: Day20 },
  { id: "day21", title: "Day 21: Weather App", component: Day21 },
  { id: "day22", title: "Day 22: Quiz App", component: Day22 },
  { id: "day23", title: "Day 23: Feedback UI", component: Day23 },
  { id: "day24", title: "Day 24: Expense Tracker", component: Day24 },
  { id: "day25", title: "Day 25: Birthday Reminder", component: Day25 },
  { id: "day26", title: "Day 26: Stopwatch", component: Day26 },
  { id: "day27", title: "Day 27: Dad Jokes", component: Day27 },
  { id: "day28", title: "Day 28: Movie Seat Booking", component: Day28 },
  { id: "day29", title: "Day 29: Typing Speed Test", component: Day29 },
  { id: "day30", title: "Day 30: Music Player", component: Day30 },
];

// --- Main App Component ---
const App = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Dynamically find the component to render based on state
  const SelectedComponent =
    projectList.find((p) => p.id === selectedProjectId)?.component ||
    (() => (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <h2 className="text-4xl font-extrabold text-teal-400 mb-4 animate-pulse">
          🚀 Welcome to the Challenge!
        </h2>
        <p className="text-lg text-gray-400">
          Select a project from the sidebar to view its component and start coding.
        </p>
      </div>
    ));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 font-inter relative overflow-hidden">
      {/* Glow Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.15),transparent_70%)]"></div>

      {/* Sidebar */}
      <div className="w-full sm:w-64 bg-gray-800/80 backdrop-blur-md shadow-2xl p-4 flex flex-col flex-shrink-0 border-r border-gray-700 relative z-20">
        <h1 className="text-2xl font-bold text-teal-400 border-b-2 border-teal-600 pb-3 mb-4 sticky top-0 bg-gray-800/90 z-10">
          <span className="text-sm text-gray-400 block font-normal">React JS</span>
          30 Days Challenge
        </h1>

        <ul className="space-y-2 overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar">
          {projectList.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => setSelectedProjectId(project.id)}
                className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-300 font-medium text-sm truncate relative group
                  ${
                    selectedProjectId === project.id
                      ? "bg-teal-600 text-white shadow-[0_0_15px_rgba(0,255,200,0.5)]"
                      : "bg-gray-700/60 hover:bg-gray-600 text-gray-300 hover:text-white"
                  }`}
                title={project.title}
              >
                {project.title}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-teal-300 transition">
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 sm:p-8 overflow-y-auto relative z-10">
        <div className="w-full h-full">
          <div className="bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-gray-700 min-h-[90vh] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,200,0.2)]">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400 border-b border-gray-700 pb-3">
              {selectedProjectId
                ? projectList.find((p) => p.id === selectedProjectId)?.title
                : "Dashboard"}
            </h2>
            <div className="p-4 flex items-center justify-center min-h-[500px]">
              <SelectedComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles (Applied globally within the component) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(45,212,191,0.4);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(45,212,191,0.7);
        }
      `}</style>
    </div>
  );
};

export default App;
