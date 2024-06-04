import { createContext, useEffect, useState } from 'react';
import { getAssets, getCrypto } from '../api/getCrypto';

const CryptoContext = createContext({
  loading: false,
  crypto: [],
  assets: [],
});

const mapAssets = (assets, result) => {
  return assets.map((asset) => {
    const coin = result.find((c) => c.id === asset.id);

    return {
      marketPrice: asset.amount * coin.price,
      totalProfit: +(
        asset.amount * coin.price -
        asset.amount * asset.price
      ).toFixed(2),
      name: coin.name,
      ...asset,
    };
  });
};

export const CryptoContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const preload = async () => {
      setLoading(true);

      const { result } = await getCrypto();
      const assets = await getAssets();

      setCrypto(result);
      setAssets(mapAssets(assets, result));
      setLoading(false);
    };

    preload();
  }, []);

  const addNewAsset = (newAsset) => {
    setAssets((prev) => mapAssets([...prev, newAsset], crypto));
  };

  return (
    <CryptoContext.Provider
      value={{ loading, crypto, assets, addNewAsset }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
