import { TiPlus } from "react-icons/ti";

import useUser from "../../features/auth/useUser";

const Header = () => {
  const { data } = useUser();
  console.log(data);
  return (
    <div className="col-span-2 px-8 py-4 border-b border-secondary-200 flex justify-between lg:ps-[16.5rem]">
      <h1 className="text-secondary-700 text-xl font-bold">پروژه های شما</h1>
      <button
        onClick={() => {}}
        className="btn btn-primary flex items-center gap-x-2"
      >
        <TiPlus className="font-extrabold" />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
};

export default Header;
