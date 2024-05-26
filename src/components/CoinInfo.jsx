import { Divider, Space, Typography } from "antd";

const CoinInfo = ({ coin }) => {
  return (
    <>
      <Space>
        <img src={coin.icon} alt="coin" />
        <Typography.Title level={2}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Space>
      <Divider />
    </>
  );
};

export default CoinInfo;
