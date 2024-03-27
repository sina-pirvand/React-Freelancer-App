import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
  // data can be undefined at first
  const { user } = data || {};
  return { isLoading, user };
};

export default useUser;
