import { Layout, Card, Space, Statistic, List, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import { getCrypto } from "../../api/getCrypto";
import useCrypto from "../../hooks/useCrypto";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

const AppSider = () => {
  const { crypto, assets } = useCrypto();

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Space direction="vertical" style={{ width: "100%", padding: "1rem" }}>
        {assets.map((a) => {
          const coin = crypto.find((c) => c.id === a.id);

          return (
            <Card style={{ marginBottom: 10 }}>
              <Statistic
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                title={a.name}
                value={a.amount * coin.price}
                precision={2}
                valueStyle={{
                  color: a.grow ? "#3f8600" : "#cf1322",
                }}
                prefix={a.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="$"
              />
              <List
                dataSource={[
                  {
                    title: "Total Profit",
                    value: a.totalProfit.toFixed(2),
                    withTag: true,
                  },
                  {
                    title: "Asset Amount",
                    value: a.amount,
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>
                      {item.withTag && (
                        <Tag color={a.grow ? "green" : "red"}>
                          {a.percentDifference}%
                        </Tag>
                      )}
                      {item.value}
                      {item.withTag && "$"}
                    </span>
                  </List.Item>
                )}
              />
            </Card>
          );
        })}
      </Space>
    </Layout.Sider>
  );
};

export default AppSider;
