import DashboardHeader from "../../common/DashboardHeader";
import Loading from "../../common/Loading";
import useProjects from "../../hooks/useProjects";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

const DashboardLayout = () => {
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingProjecs, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProposals || isLoadingProjecs || isLoadingUsers)
    return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} projects={projects} users={users} />
    </div>
  );
};

export default DashboardLayout;
