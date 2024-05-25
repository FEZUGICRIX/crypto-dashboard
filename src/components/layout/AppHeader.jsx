import { Button, Layout, Modal, Select, Drawer, Space } from "antd";
import useCrypto from "../../hooks/useCrypto";
import { useEffect, useState } from "react";
import ModalInfo from "../ModalInfo";
import CoinInfo from "../CoinInfo";
import DrawerContent from "../DrawerContent";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  height: 60,
};

const AppHeader = () => {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState(null);
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const keypress = (e) => {
      if (e.key === "/") {
        setSelect((prev) => !prev);
      }
    };

    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  const options = crypto.map((c) => ({
    label: c.id,
    value: c.id,
    icon: c.icon,
  }));

  const handleSelect = (value) => {
    setSelect((prev) => !prev);
    setCoin(crypto.find((c) => c.id === value));
    setModal(true);
  };

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: 250 }}
        onClick={() => setSelect(!select)}
        onSelect={handleSelect}
        open={select}
        options={options}
        placeholder="Press / to open"
        optionRender={(option) => (
          <Space>
            <img src={option.data.icon} style={{ width: 40 }} alt="crypto" />
            {option.data.label}
          </Space>
        )}
      />


      <Modal open={modal} onCancel={() => setModal(false)} footer={false}>
        <ModalInfo coin={coin} />
      </Modal>

      <Button onClick={() => setDrawer(true)} type="primary">Add Asset</Button>

      <Drawer destroyOnClose title='Add Asset' onClose={() => setDrawer(false)} open={drawer}>
        <DrawerContent />
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
