import { Layout } from "antd";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
};

const AppSider = () => {
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      AppSider
    </Layout.Sider>
  );
};

export default AppSider;
