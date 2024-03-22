import http from "./httpService";

export const getOwnerProjectsApi = () => {
  // get all projects created by owner (owner projects not all projects)
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};
