import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveProjectApi } from "../../services/projectService";
import { toast } from "react-hot-toast";

const useRemoveProject = () => {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: RemoveProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { removeProject, isDeleting };
};

export default useRemoveProject;
