import { TbLogout2 } from "react-icons/tb";
import useLogout from "./useLogout";
import Loading from "../../common/Loading";

const Logout = () => {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <TbLogout2 className="w-6 h-6 text-secondary-400 hover:text-error transition-all duration-500" />
    </button>
  );
};
export default Logout;
