import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...rest }) {
  // {status, projectId}
  return http
    .patch(`/proposal/${proposalId}`, rest)
    .then(({ data }) => data.data);
}
