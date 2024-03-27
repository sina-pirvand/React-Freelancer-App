import React from "react";
import Table from "../../common/Table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

const ProposalRow = ({ proposal, index }) => {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td className="ps-7">{proposal.duration} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td className="text-wrap min-w-[200px]">
        {truncateText(proposal.description, 50)}
      </td>
      <td>{proposal.status}</td>
      <td>
        <button>
          <span className="w-6 h-6 ms-2 text-primary-600" />
        </button>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
