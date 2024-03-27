import Empty from "../../common/Empty";
import Loading from "../../common/Loading";
import Table from "../../common/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProject";

const ProjectTable = () => {
  //Note: CHANGE let TO const AFTER ADD PROJECT FEATURE IS BUILT
  let { isLoading, projects } = useOwnerProjects();
  // projects = [
  //   {
  //     _id: "1",
  //     title: "پروژه اول",
  //     category: { title: "طراحی UI" },
  //     budget: 1000000,
  //     deadline: "2024-03-31",
  //     tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  //     freelancer: { name: null },
  //     status: "OPEN",
  //   },
  //   {
  //     _id: "2",
  //     title: "پروژه تستی با نام طولانی برای تست تابع کوتاه کننده",
  //     category: { title: "برنامه نویسی" },
  //     budget: 20000000,
  //     deadline: "2024-04-15",
  //     tags: ["برنامه نویسی", "ریکت", "عجله ای"],
  //     freelancer: { name: "سینا پیروند" },
  //     status: "CLOSED",
  //   },
  //   {
  //     _id: "3",
  //     title: "پروژه تستی 3",
  //     category: { title: "تست" },
  //     budget: 150000,
  //     deadline: "2024-04-10",
  //     tags: ["تست"],
  //     freelancer: { name: "سید محمد رضا کشاورز افتخاری" },
  //     status: "OPEN",
  //   },
  // ];
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
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
