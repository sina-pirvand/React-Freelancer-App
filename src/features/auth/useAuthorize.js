import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const useAthorize = () => {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };
  const desiredRole = pathname.split("/").at(1); // freelancer/owner/admin

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { user, isLoading, isAuthenticated, isAuthorized };
};

export default useAthorize;
