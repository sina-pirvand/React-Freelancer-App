import { useEffect } from "react";
import useAthorize from "../../features/auth/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // LOAD THE AUTHENTICATED USER
  const { isLoading, isAuthenticated, isAuthorized } = useAthorize();

  // CHECK IF USER IS ATHORIZED/ATHENTICATED
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/deny-access");
  }, [isAuthenticated, isLoading, isAuthorized, navigate]);

  // WHILE LOADING
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  // IF USER IS AUTHENTICATED AND AUTHORIZED
  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
