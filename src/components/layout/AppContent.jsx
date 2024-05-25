import { Layout, Space, Typography } from "antd";

import useCrypto from "../../hooks/useCrypto";
import ChartAssets from "../ChartAssets";
import TableAssets from "../TableAssets";

const contentStyle = {
  minHeight: "calc(100vh - 60px)",
  padding: "1rem",
  color: "#fff",
  backgroundColor: "#001529",
};

const AppContent = () => {
  const { assets } = useCrypto();

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title style={{ color: "#fff" }}>
        Portfolio:{" "}
        {assets
          .map((a) => a.totalAmount)
          .reduce((acc, v) => (acc += v), 0)
          .toFixed(2)}
        $
      </Typography.Title>

      <Space direction="vertical" style={{ width: "100%" }}>
        <ChartAssets />
        <TableAssets />
      </Space>
    </Layout.Content>
  );
};

export default AppContent;
