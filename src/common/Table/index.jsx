const Table = ({ children }) => {
  return (
    <div>
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
};

const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ children }) => {
  return <tr className="bg-secondary-0">{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
