import { NavLink } from "react-router-dom";
import AppLayout from "../../common/AppLayout";
import Sidebar from "../../common/Sidebar";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCollection } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <li>
          <NavLink
            to="dashboard"
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
            to="projects"
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
        <li>
          <NavLink
            to="proposals"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item bg-primary-100/60 text-primary-900"
                : "sidebar-item"
            }
          >
            <TiDocumentText className="w-6 h-6" />
            <span>درخواست ها</span>
          </NavLink>
        </li>
      </Sidebar>
    </AppLayout>
  );
};

export default FreelancerLayout;
