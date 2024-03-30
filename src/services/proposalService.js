import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...rest }) {
  // {status, projectId}
  return http
    .patch(`/proposal/${proposalId}`, rest)
    .then(({ data }) => data.data);
}

export function getProposalApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
