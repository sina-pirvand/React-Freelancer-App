import Table from "../../common/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

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

const ProposalRow = ({ proposal, index }) => {
  const { description, duration, price, status } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="text-wrap min-w-[150px]">
        {truncateText(description, 60)}
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td className="min-w-[130px]">
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
