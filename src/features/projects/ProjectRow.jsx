import { useState } from "react";
import Modal from "../../common/Modal";
import Table from "../../common/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import ConfirmDelete from "../../common/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, SetIsEditOpen] = useState(false);
  const [isDeleteOpen, SetIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-wrap min-w-[150px]">
        {truncateText(project.title, 30)}
      </td>

      {/* //Note: CHANGE AFTER DATABASE PROBLEM */}
      <td>{project.category?.title || "برنامه نویسی"}</td>

      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td className=" min-w-[150px]">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="text-wrap min-w-[150px]">
        {project.freelancer?.name || "-"}
      </td>
      <td>
        {/* {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )} */}
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        {/* Edit  */}
        <button>
          <TbEdit
            className="w-6 h-6 ms-2 text-primary-600"
            onClick={() => SetIsEditOpen(true)}
          />
        </button>
        <Modal
          title="ویرایش پروژه"
          open={isEditOpen}
          onClose={() => SetIsEditOpen(false)}
        >
          <CreateProjectForm
            onClose={() => SetIsEditOpen(false)}
            projectToEdit={project}
          />
        </Modal>
        {/* Delete  */}
        <button>
          <HiOutlineTrash
            className="w-6 h-6 ms-2 text-error"
            onClick={() => {
              SetIsDeleteOpen(true);
            }}
          />
        </button>
        <Modal
          title="حذف پروژه"
          open={isDeleteOpen}
          onClose={() => SetIsDeleteOpen(false)}
        >
          <ConfirmDelete
            resourceName={project.title}
            onClose={() => SetIsDeleteOpen(false)}
            onConfirm={() =>
              removeProject(project._id, {
                onSuccess: () => {
                  SetIsDeleteOpen(false);
                },
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
      <td>
        {/* NAVGATES TO: owner/project/<project id> */}
        <Link to={project._id}>
          <TiDocumentText className="w-6 h-6 ms-6 text-primary-600" />
        </Link>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
