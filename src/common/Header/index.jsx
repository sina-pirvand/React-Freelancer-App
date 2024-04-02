import HeaderMenu from "../HeaderMenu";
import UserAvatar from "../../features/auth/UserAvatar";
import useUser from "../../features/auth/useUser";

const Header = () => {
  const { isLoading } = useUser();

  return (
    <div
      className={`col-span-2 px-8 py-4 border-b border-secondary-200 bg-secondary-0 flex justify-between md:justify-end ${
        isLoading ? "blur-sm" : ""
      }`}
    >
      <div className="flex md:hidden">
        <button className="p-1 bg-red-100">===</button>
      </div>
      <div className="flex items-center gap-x-4">
        <HeaderMenu />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
