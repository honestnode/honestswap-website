import React, {createContext, FC, useContext, useEffect, useState} from 'react';

export interface ContractContextProps {
  loading: boolean;
  honestAsset: string; // TODO: change to BigNumber
  basketAssets: Record<string, number>; // TODO: change to BigNumber
}

const ContractContext = createContext<ContractContextProps>({} as never);

export const ContractContextProvider: FC = props => {

  const [context, setContext] = useState<ContractContextProps>({
    loading: true,
    honestAsset: 'N/A',
    basketAssets: {'dai': 0, 'tusd': 0, 'usdc': 0, 'usdt': 0}
  });

  const loadData = async (): Promise<Pick<ContractContextProps, 'honestAsset' | 'basketAssets'>> => {
    // TODO: to implement
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({
          honestAsset: '1,403,563,535',
          basketAssets: {'dai': 1,'usdt': 0.25,'usdc': 0.5, 'tusd': 0.75 }
        });
      }, 10000)
    );
  };

  useEffect(() => {
    loadData().then(data => {
      setContext({
        loading: false,
        honestAsset: data.honestAsset,
        basketAssets: data.basketAssets
      });
    });
  }, []);

  return (
    <ContractContext.Provider value={context}>{props.children}</ContractContext.Provider>
  );
};

export const useContract = () => useContext<ContractContextProps>(ContractContext);