import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useProjects = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  console.log(search);
  console.log(queryObject);

  const { isLoading, data } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
  });

  const { projects } = data || {};

  return { isLoading, projects };
};

export default useProjects;
