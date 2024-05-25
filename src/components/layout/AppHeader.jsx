import { Layout } from "antd";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  height: 60,
};

const AppHeader = () => {
  return <Layout.Header style={headerStyle}>AppHeader</Layout.Header>;
};

export default AppHeader;
