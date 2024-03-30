import Empty from "../../common/Empty";
import Loading from "../../common/Loading";
import Table from "../../common/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

const ProposalTable = () => {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات درخواست</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت درخواست</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProposalTable;
