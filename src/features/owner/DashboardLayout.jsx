import Loading from "../../common/Loading";
import useOwnerProjects from "../projects/useOwnerProject";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
};

export default DashboardLayout;
