import Empty from "../../../common/Empty";
import Loading from "../../../common/Loading";
import Table from "../../../common/Table";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

const ProjectTable = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th className="ps-10">عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
