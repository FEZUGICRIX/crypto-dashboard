import { Table } from "antd";
import useCrypto from "../hooks/useCrypto";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: {
      target: "full-header",
    },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Total Profit, $",
    dataIndex: "profit",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.profit - b.profit,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.profit - b.profit,
  },
];

const TableAssets = () => {
  const { assets } = useCrypto();

  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={assets.map((a) => ({
        name: a.name,
        profit: a.totalProfit.toLocaleString(),
        amount: a.amount.toLocaleString(),
      }))}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};

export default TableAssets;
