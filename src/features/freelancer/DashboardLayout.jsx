import Loading from "../../common/Loading";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
};

export default DashboardLayout;
