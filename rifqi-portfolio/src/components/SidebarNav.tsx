import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiFileText,
  FiGrid,
  FiMail,
} from "react-icons/fi";

type Item = { id: string; label: string };

export default function SidebarNav({
  items,
  activeId,
  mobileOpen,
  setMobileOpen,
  onNavigate,
}: {
  items: Item[];
  activeId: string;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  onNavigate: (id: string) => void;
}) {
  const iconFor = (id: string) => {
    switch (id) {
      case "hero":
        return <FiHome className="text-xl" />;
      case "about":
        return <FiUser className="text-xl" />;
      case "resume":
        return <FiFileText className="text-xl" />;
      case "portfolio":
        return <FiGrid className="text-xl" />;
      case "contact":
        return <FiMail className="text-xl" />;
      default:
        return <FiHome className="text-xl" />;
    }
  };

  return (
    <>
      {/* mobile toggle */}
      <button
        className={clsx(
          "fixed right-3 top-3 z-[9998] rounded-full p-2",
          "bg-black/20 backdrop-blur border border-white/10 text-white",
          "lg:hidden"
        )}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* sidebar */}
      <aside
        className={clsx(
          "fixed left-0 top-0 bottom-0 z-[9997] p-4",
          "transition-transform duration-300",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "w-[300px] lg:w-[100px]",
          "bg-primary lg:bg-transparent lg:backdrop-blur-0",
          "border-r border-white/10 lg:border-r-0"
        )}
      >
        <nav className="mt-16 lg:mt-24">
          <ul className="space-y-2">
            {items.map((it) => {
              const active = activeId === it.id;
              return (
                <li key={it.id}>
                  <button
                    onClick={() => onNavigate(it.id)}
                    className={clsx(
                      "w-full flex items-center gap-3",
                      "rounded-full px-4 py-3",
                      "bg-white/95 text-[#45505b]",
                      "transition-all duration-300",
                      active && "bg-tertiary text-white",
                      "hover:bg-tertiary hover:text-white",
                      "lg:justify-center lg:px-0",
                      "lg:w-14 lg:h-14 lg:rounded-full"
                    )}
                    title={it.label}
                  >
                    {iconFor(it.id)}
                    <span className={clsx("lg:hidden", active && "text-white")}>
                      {it.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9996] bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
