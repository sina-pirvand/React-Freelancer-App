import truncateText from "../../utils/truncateText";
import useUser from "./useUser";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2 text-secondary-500">
      <span className="font-bold">{truncateText(user?.name, 13)}</span>
      <img
        src="/user.jpg"
        alt="user-avatar"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default UserAvatar;
