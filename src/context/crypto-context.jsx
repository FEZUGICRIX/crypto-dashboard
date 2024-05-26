import { useState, useEffect, createContext } from "react";

import { getAssets, getCrypto } from "../api/getCrypto";
import { percentDifference } from "../utils";

const CryptoContext = createContext({
  loading: false,
  crypto: [],
  assets: [],
});

const mapAssets = (assets, result) => {
  return assets.map((a) => {
    const coin = result.find((c) => c.id === a.id);

    return {
      grow: a.price < coin.price,
      totalAmount: a.amount * coin.price,
      totalProfit: a.amount * coin.price - a.amount * a.price,
      percentDifference: percentDifference(a.price, coin.price),
      name: coin.name,
      ...a,
    };
  });
};

export const CryptoContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAsssets] = useState([]);

  useEffect(() => {
    const preload = async () => {
      setLoading(true);

      const { result } = await getCrypto();
      const assets = await getAssets();

      setAsssets(mapAssets(assets, result));
      setCrypto(result);
      setLoading(false);
    };

    preload();
  }, []);

  const addAsset = (newAsset) => {
    setAsssets((prev) => mapAssets([...prev, newAsset], crypto));
  };

  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
