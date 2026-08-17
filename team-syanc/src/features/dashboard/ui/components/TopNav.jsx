import React from "react";
import {
  Search,
  Bell,
  Grid3X3,
  Globe2,
} from "lucide-react";

const TopNav = () => {
  return (
    <nav
      className="
        h-16 w-full
        flex items-center justify-between
        px-3
        bg-[var(--surface-container-lowest)]
        border-b border-[var(--outline-variant)]
        text-[var(--on-surface)]
      "
    >

      {/* ================= LEFT ================= */}
      <div className="flex items-center">

        {/* Search */}
        <div
          className="
            h-10 w-64
            flex items-center
            gap-2
            px-2.5
            rounded-[var(--radius-sm)]
            bg-[var(--surface-container-low)]
            text-[var(--outline)]
          "
        >
          <Search size={18} strokeWidth={2} />

          <input
            type="text"
            placeholder="Search workspace..."
            className="
              w-full
              bg-transparent
              outline-none
              border-none
              text-[14px]
              text-[var(--on-surface)]
              placeholder:text-[var(--outline)]
            "
          />
        </div>

      </div>


      {/* ================= RIGHT ================= */}
      <div className="flex items-center h-full gap-1">

        {/* Globe */}
        <button
          className="
            w-7 h-16
            flex items-center justify-center
            rounded-[var(--radius-sm)]
            text-[var(--on-surface-variant)]
            hover:bg-[var(--surface-container-high)]
            hover:text-[var(--on-surface)]
            transition
          "
        >
          <Globe2 size={19} />
        </button>


        {/* Notification */}
        <button
          className="
            w-7 h-16
            flex items-center justify-center
            rounded-[var(--radius-sm)]
            text-[var(--on-surface-variant)]
            hover:bg-[var(--surface-container-high)]
            hover:text-[var(--on-surface)]
            transition
          "
        >
          <Bell size={18} />
        </button>


        {/* Logo */}
        <div
          className="
            flex items-center
            gap-1
            px-2
            h-16
            select-none
          "
        >

          {/* small logo mark */}
          <div
            className="
              text-[var(--primary)]
              text-sm
              leading-none
            "
          >
            ✦
          </div>

          <span
            className="
              text-[16px]
              font-semibold
              tracking-tight
              text-[var(--on-surface)]
            "
          >
            RK
          </span>

        </div>


        {/* Grid */}
        <button
          className="
            w-7 h-16
            flex items-center justify-center
            rounded-[var(--radius-sm)]
            text-[var(--on-surface-variant)]
            hover:bg-[var(--surface-container-high)]
            hover:text-[var(--on-surface)]
            transition
          "
        >
          <Grid3X3 size={18} />
        </button>


        {/* Profile */}
        <button
          className="
            ml-1
            w-8 h-8
            rounded-full
            overflow-hidden
            border
            border-[var(--outline-variant)]
            hover:border-[var(--primary)]
            transition
          "
        >
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </button>

      </div>

    </nav>
  );
};

export default TopNav;
