import { useState } from "react";
import Table from "../../../common/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import Modal from "../../../common/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const ProjectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

const ProjectRow = ({ project, index }) => {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-wrap min-w-[150px]">{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${ProjectStatus[status].className}`}>
          {ProjectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="درخواست انجام پروژه"
        >
          <CreateProposal
            onClose={() => {
              setOpen(false);
            }}
            projectId={project._id}
          />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary text-xs"
        >
          ثبت درخواست
        </button>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
