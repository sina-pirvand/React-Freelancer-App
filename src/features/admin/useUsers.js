import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

const useUsers = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });

  const { users } = data || {};

  return { isLoading, users };
};

export default useUsers;
