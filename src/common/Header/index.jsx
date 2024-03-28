import { TiPlus } from "react-icons/ti";
import Modal from "../Modal";
import CreateProjectForm from "../../features/projects/CreateProjectForm";
import { useState } from "react";
import HeaderMenu from "../HeaderMenu";
import UserAvatar from "../../features/auth/UserAvatar";
import useUser from "../../features/auth/useUser";

const Header = () => {
  const [open, setOpen] = useState(true);
  const { isLoading } = useUser();

  return (
    <div
      className={`col-span-2 px-8 py-4 border-b border-secondary-200 bg-secondary-0 flex justify-between lg:ps-[16.5rem] ${
        isLoading ? "blur-sm" : ""
      }`}
    >
      <h1 className="text-secondary-700 text-xl font-bold">پروژه های شما</h1>
      <div className="flex items-center gap-x-4">
        <HeaderMenu />
        <UserAvatar />
        <Modal
          title="اضافه کردن پروژه جدید"
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProjectForm onClose={() => setOpen(false)} />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary flex items-center gap-x-2"
        >
          <TiPlus className="font-extrabold" />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
