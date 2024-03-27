import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import Logout from "../../features/auth/Logout";

const HeaderMenu = () => {
  return (
    <ul className="flex items-center gap-x-3">
      <li className="flex">
        <Link to="/dashboard">
          <LuUser className="w-6 h-6 text-primary-600 self-end" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
