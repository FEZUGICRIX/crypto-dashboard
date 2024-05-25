import AppLayout from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/crypto-context";
import useCrypto from "./hooks/useCrypto";

const App = () => {
  return (
    <>
      <CryptoContextProvider>
        <AppLayout />
      </CryptoContextProvider>
    </>
  );
};

export default App;
