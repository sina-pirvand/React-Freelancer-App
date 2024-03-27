import { useState } from "react";
import Table from "../../common/Table/index";
import truncateText from "../../utils/truncateText";
import Modal from "../../common/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { MdContentPasteSearch } from "react-icons/md";

// 0, 1, 2

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td className="ps-7">{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td className="text-wrap min-w-[200px]">
        {truncateText(proposal.description, 50)}
      </td>
      <td className="min-w-[130px]">
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdContentPasteSearch className="w-6 h-6 ms-6 text-primary-600" />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
