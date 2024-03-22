import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCollection } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="px-4 py-8 border-l border-secondary-100">
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink
            to="/owner/dashboard"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item bg-primary-100/60 text-primary-900"
                : "sidebar-item"
            }
          >
            <RxDashboard className="w-6 h-6" />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/owner/projects"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item bg-primary-100/60 text-primary-900"
                : "sidebar-item"
            }
          >
            <HiOutlineCollection className="w-6 h-6" />
            <span>پروژه ها</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
