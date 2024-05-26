import {
  Result,
  Select,
  Button,
  Space,
  Form,
  DatePicker,
  InputNumber,
} from "antd";
import { useState, useRef } from "react";

import useCrypto from "../hooks/useCrypto";
import CoinInfo from "../components/CoinInfo";

const DrawerContent = ({ setOpen }) => {
  const { crypto, addAsset } = useCrypto();
  const [coin, setCoin] = useState(null);
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();
  const assetRef = useRef();

  const onFinish = (value) => {
    const newAssets = {
      id: coin.id,
      price: value.price,
      amount: value.amount,
      name: coin.name,
    };

    assetRef.current = newAssets;
    addAsset(newAssets);
    setSuccess(true);
  };

  const handleAmountChange = (value) => {
    const price = form.getFieldValue("price");
    form.setFieldValue("total", +(value * price).toFixed(2));
  };

  const handlePriceChange = (value) => {
    const amount = form.getFieldValue("amount");
    form.setFieldValue("total", +(value * amount).toFixed(2));
  };

  const handleCoinChange = (value) => {
    setCoin(crypto.find((c) => c.id === value));
  };

  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        placeholder="Select coin"
        onChange={handleCoinChange}
        options={crypto.map((c) => ({
          label: c.name,
          value: c.id,
          icon: c.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img src={option.data.icon} alt="coin" style={{ width: 40 }} />
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  if (success) {
    const handleAddAgain = () => {
      form.resetFields();
      setCoin(null);
      setSuccess(false);
    };

    return (
      <Result
        status="success"
        title="New Asset Added"
        subTitle={`Added ${assetRef.current.amount} of ${assetRef.current.name} by price ${assetRef.current.price}`}
        extra={[
          <Button onClick={() => setOpen(false)} type="primary">
            Exit
          </Button>,
          <Button onClick={handleAddAgain}>Add again</Button>,
        ]}
      />
    );
  }

  return (
    <>
      <CoinInfo coin={coin} />
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ price: +coin.price.toFixed(2) }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Asset amount"
          name="amount"
          rules={[
            {
              type: "number",
              min: 0,
              required: true,
            },
          ]}
        >
          <InputNumber
            onChange={handleAmountChange}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              type: "number",
              min: 0,
              required: true,
            },
          ]}
        >
          <InputNumber onChange={handlePriceChange} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Date & Time" name="date">
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Total" name="total">
          <InputNumber disabled style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DrawerContent;
