import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast("از حساب خود خارج شدید", { icon: "💬" });
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });
  return { isPending, logout };
};

export default useLogout;
