import { useQuery } from "@tanstack/react-query";
import { getProposalApi } from "../../services/proposalService";
const useProposals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalApi,
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
};

export default useProposals;
