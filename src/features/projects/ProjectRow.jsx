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

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, SetIsEditOpen] = useState(false);
  const [isDeleteOpen, SetIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          قرار گیرد.
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
            onConfirm={removeProject(project._id, {
              onSuccess: () => {
                SetIsDeleteOpen(false);
              },
            })}
            disabled={false}
          />
        </Modal>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
