import HeaderMenu from "../HeaderMenu";
import UserAvatar from "../../features/auth/UserAvatar";
import useUser from "../../features/auth/useUser";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
