import Empty from "../../common/Empty";
import Loading from "../../common/Loading";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import useOwnerProjects from "./useOwnerProject";

const fakeProjects = [
  {
    _id: "1",
    title: "پروژه اول",
    category: { title: "طراحی UI" },
    budget: 1000000,
    deadline: "2024-03-31",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
    freelancer: { name: null },
    status: "OPEN",
  },
  {
    _id: "2",
    title: "پروژه تستی با نام طولانی برای تست تابع کوتاه کننده",
    category: { title: "برنامه نویسی" },
    budget: 20000000,
    deadline: "2024-04-15",
    tags: ["برنامه نویسی", "ریکت", "عجله ای"],
    freelancer: { name: "سینا پیروند" },
    status: "CLOSED",
  },
  {
    _id: "3",
    title: "پروژه تستی 3",
    category: { title: "تست" },
    budget: 150000,
    deadline: "2024-04-10",
    tags: ["تست"],
    freelancer: { name: "سید محمد رضا کشاورز افتخاری" },
    status: "OPEN",
  },
];

const ProjectTable = () => {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  //   if (!projects.length) return <Empty resourceName="پروژه" />;
  return (
    <div className="bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {fakeProjects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td className="text-wrap max-w-[200px]">
                {truncateText(project.title, 30)}
              </td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge--secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="text-wrap max-w-[200px]">
                {project.freelancer?.name || "-"}
              </td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
