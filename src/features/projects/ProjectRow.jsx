import Table from "../../common/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const ProjectRow = ({ project, index }) => {
  return (
    <Table.Row>
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
    </Table.Row>
  );
};

export default ProjectRow;
