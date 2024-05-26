import { Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";

const ModalInfo = ({ coin }) => {
  const {
    priceChange1h,
    priceChange1d,
    priceChange1w,
    price,
    priceBtc,
    marketCap,
    contractAddress,
  } = coin;
  const { Paragraph, Text } = Typography;

  return (
    <>
      <CoinInfo coin={coin} />
      <Paragraph>
        <Text strong>1 hour: </Text>
        <Tag color={priceChange1h > 0 ? "green" : "red"}>{priceChange1h}%</Tag>

        <Text strong>1 day: </Text>
        <Tag color={priceChange1d > 0 ? "green" : "red"}>{priceChange1d}%</Tag>

        <Text strong>1 week: </Text>
        <Tag color={priceChange1w > 0 ? "green" : "red"}>{priceChange1w}%</Tag>
      </Paragraph>
      <Paragraph>
        <Text strong>Price: </Text>
        <Text>{price.toFixed(2)}$</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Price BTC: </Text>
        <Text>{priceBtc}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Market Cap: </Text>
        <Text>{marketCap}$</Text>
      </Paragraph>
      {contractAddress && (
        <Paragraph>
          <Text strong>Contract Address: </Text>
          {contractAddress}
        </Paragraph>
      )}
    </>
  );
};

export default ModalInfo;
