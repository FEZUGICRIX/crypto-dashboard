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
    title: "Price $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.price - b.price,
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
        price: a.price,
        amount: a.amount,
      }))}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};

export default TableAssets;
