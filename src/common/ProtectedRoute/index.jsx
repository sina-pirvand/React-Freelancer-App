import useAthorize from "../../features/auth/useAuthorize";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, isAuthorized } = useAthorize();
  console.log(isAuthorized);
  return children;
};

export default ProtectedRoute;
