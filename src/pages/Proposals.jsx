import ProposalTable from "../features/proposals/ProposalTable";

const Proposals = () => {
  return (
    <div>
      <h1 className="ps-4 font-bold text-3xl text-secondary-900 mb-6">
        درخواست ها
      </h1>
      <ProposalTable />
    </div>
  );
};

export default Proposals;
