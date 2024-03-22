import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
      <Header />
      <Sidebar />
      <div className="p-8 overflow-y-auto bg-secondary-50">
        <div className="mx-auto max-w-screen-lg 2xl:max-w-screen-xl flex flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
