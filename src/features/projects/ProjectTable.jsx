import useOwnerProjects from "./useOwnerProject";

const ProjectTable = () => {
  const { isLoading, projects } = useOwnerProjects();
  return <div>ProjectTable</div>;
};

export default ProjectTable;
