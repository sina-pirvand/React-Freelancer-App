import Empty from "../../common/Empty";
import Table from "../../common/Table";
import ProposalRow from "./ProposalRow";

const ProposalsTable = ({ proposals }) => {
  // if no proposals were available
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>توضیحات</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
