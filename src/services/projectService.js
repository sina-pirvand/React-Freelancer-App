import http from "./httpService";

//Note: ({data}=>data.data) => destructures the data property from the response object (assuming the response is in the format { data: ... }) and then immediately returns data.data.
export const getOwnerProjectsApi = () => {
  // get all projects created by owner (owner projects not all projects)
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const RemoveProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};

export const createProjectApi = (data) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};

export const editProjectApi = ({ id, newProject }) => {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
};

export const toggleProjectStatusApi = ({ id, data }) => {
  // data = {status = "OPEN"/"CLOSED"}
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
};

export const getProjectApi = (id) => {
  // data = {status = "OPEN"/"CLOSED"}
  return http.get(`/project/${id}`).then(({ data }) => data.data);
};

// GET ALL PROJECTS
export const getProjectsApi = () => {
  // data = {status = "OPEN"/"CLOSED"}
  return http.get("/project/list").then(({ data }) => data.data);
};
