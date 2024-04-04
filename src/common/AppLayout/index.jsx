import { Outlet } from "react-router-dom";
import Header from "../Header";

const AppLayout = ({ children }) => {
  return (
    <div className="block lg:grid grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr] h-screen">
      <Header />
      {/* <Sidebar /> */}
      {children}
      <div className="p-8 overflow-y-auto bg-secondary-50">
        <div className="mx-auto max-w-screen-lg 2xl:max-w-screen-xl flex flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
