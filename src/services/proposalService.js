import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...restData }) {
  // restData = {status, projectId}
  return http
    .patch(`/proposal/${proposalId}`, restData)
    .then(({ data }) => data.data);
}

export function getProposalApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function createProposalApi(data) {
  // {status, projectId}
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
