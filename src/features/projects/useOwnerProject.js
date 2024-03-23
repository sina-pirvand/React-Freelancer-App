import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

const useOwnerProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects } = data || {};
  return { isLoading, projects };
};
export default useOwnerProjects;
