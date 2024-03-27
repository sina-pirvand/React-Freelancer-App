import { TbLogout2 } from "react-icons/tb";

const Logout = () => {
  return (
    <button>
      <TbLogout2 className="w-6 h-6 text-secondary-400 hover:text-error transition-all duration-500" />
    </button>
  );
};

export default Logout;
