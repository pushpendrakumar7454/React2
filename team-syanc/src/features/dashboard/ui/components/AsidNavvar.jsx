import React from "react";
import {
    LayoutDashboard,
    ClipboardList,
    Users,
    MessageSquare,
    Settings,
    Plus,
    ChartArea,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";
import NavigationTab from "./NavigationTab";

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
        <NavigationTab  path={"/home/department"} Icon={<ChartArea/>} title={"department"}/>

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
