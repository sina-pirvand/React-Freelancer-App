import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

const useProjects = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
};

export default useProjects;
