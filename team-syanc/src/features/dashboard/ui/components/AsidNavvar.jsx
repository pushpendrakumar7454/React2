import React from "react";
import {
    LayoutDashboard,
    ClipboardList,
    Users,
    MessageSquare,
    Settings,
    Plus,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const AsidNavvar = () => {

    const dispatch = useDispatch();

    const themeChange = () => {
        dispatch(toggleTheme());
    };

    return (
        <aside className="fixed left-0 top-0 flex h-screen w-[240px] flex-col border-r bg-[var(--surface-container-lowest)] text-[var(--on-surface)]">

            {/* ================= LOGO ================= */}
            <div className="px-5 pt-5">
                <h1 className="text-[20px] font-bold tracking-tight">
                    TeamSync
                </h1>

                <p className="mt-0.5 text-[14px] text-[var(--on-surface-variant)]">
                    Enterprise Workspace
                </p>
            </div>


            {/* ================= NAVIGATION ================= */}
            <nav className="mt-7 flex flex-col">

                {/* Dashboard */}
                <div className="group relative flex h-10 cursor-pointer items-center gap-3 bg-[var(--surface-container)] px-5 text-[var(--primary)]">

                    <span className="absolute right-0 top-0 h-full w-[2px] bg-[var(--primary)]" />

                    <LayoutDashboard
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-semibold">
                        Dashboard
                    </span>
                </div>


                {/* Tasks */}
                <div className="flex h-10 cursor-pointer items-center gap-3 px-5 text-[var(--on-surface-variant)] transition-all hover:bg-[var(--surface-container-low)] hover:text-[var(--primary)]">

                    <ClipboardList
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-medium">
                        Tasks
                    </span>
                </div>


                {/* Change Theme */}
                <div
                    onClick={() => themeChange()}
                    className="flex h-10 cursor-pointer items-center gap-3 px-5 text-[var(--on-surface-variant)] transition-all hover:bg-[var(--surface-container-low)] hover:text-[var(--primary)]"
                >

                    <ClipboardList
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-medium">
                        Change Theme
                    </span>
                </div>


                {/* Team */}
                <div className="flex h-10 cursor-pointer items-center gap-3 px-5 text-[var(--on-surface-variant)] transition-all hover:bg-[var(--surface-container-low)] hover:text-[var(--primary)]">

                    <Users
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-medium">
                        Team
                    </span>
                </div>


                {/* Chat */}
                <div className="flex h-10 cursor-pointer items-center gap-3 px-5 text-[var(--on-surface-variant)] transition-all hover:bg-[var(--surface-container-low)] hover:text-[var(--primary)]">

                    <MessageSquare
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-medium">
                        Chat
                    </span>
                </div>


                {/* Settings */}
                <div className="flex h-10 cursor-pointer items-center gap-3 px-5 text-[var(--on-surface-variant)] transition-all hover:bg-[var(--surface-container-low)] hover:text-[var(--primary)]">

                    <Settings
                        size={17}
                        strokeWidth={1.8}
                    />

                    <span className="text-[12px] font-medium">
                        Settings
                    </span>
                </div>

            </nav>


            {/* ================= BOTTOM BUTTON ================= */}
            <div className="mt-auto border-t border-[var(--outline-variant)] p-4">

                <button className="flex h-9 w-full cursor-pointer active:scale-95 items-center justify-center gap-2 rounded-md bg-[var(--primary-container)] text-[11px] font-semibold text-[var(--on-primary-container)] shadow-[var(--ai-glow)] transition-all hover:brightness-110">

                    <Plus
                        size={15}
                        strokeWidth={2.5}
                    />

                    <span className="">
                        New Task
                    </span>

                </button>

            </div>

        </aside>
    );
};

export default AsidNavvar;
