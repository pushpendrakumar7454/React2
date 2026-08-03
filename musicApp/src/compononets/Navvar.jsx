import {
  Home,
  Search,
  Library,
  Heart,
  Music2,
  Disc3,
  Radio,
  PlusCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-zinc-900 border border-zinc-700 rounded-xl p-2"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-zinc-950/90 backdrop-blur-xl border-r border-zinc-800 flex flex-col justify-between p-6 z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <Music2 size={34} className="text-green-500" />
              <h1 className="text-2xl font-bold tracking-wider">
                Musicfy
              </h1>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu */}
          <div className="space-y-2">

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-green-500 text-black shadow-lg shadow-green-500/30 cursor-pointer">
              <Home size={22} />
              <span className="font-medium">Home</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
              <Search size={22} />
              <span className="font-medium">Discover</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
              <Library size={22} />
              <span className="font-medium">Library</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
              <Heart size={22} />
              <span className="font-medium">Favorites</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
              <Disc3 size={22} />
              <span className="font-medium">Albums</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer">
              <Radio size={22} />
              <span className="font-medium">Radio</span>
            </div>

          </div>

          {/* Playlist */}
          <div className="mt-12">
            <h2 className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Playlist
            </h2>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-black font-semibold hover:scale-105 transition-all">
              <PlusCircle size={20} />
              Create Playlist
            </button>

            <div className="mt-6 space-y-2">

              <div className="px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:bg-zinc-800 hover:text-white transition-all">
                Chill Vibes
              </div>

              <div className="px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:bg-zinc-800 hover:text-white transition-all">
                Workout Mix
              </div>

              <div className="px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:bg-zinc-800 hover:text-white transition-all">
                Top Hits
              </div>

              <div className="px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:bg-zinc-800 hover:text-white transition-all">
                Coding Songs
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Profile */}
        <div className="border-t border-zinc-800 pt-5">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold">Neeraj Kumar</h3>
              <p className="text-sm text-gray-400">Premium User</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;