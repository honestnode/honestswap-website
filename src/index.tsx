import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {ContractContextProvider, useContract} from './context';

const App: FC = () => {
  return (
    <ContractContextProvider>
      <Main/>
    </ContractContextProvider>
  );
};

const Main: FC = () => {

  const contract = useContract();

  return (
    <div>{
      contract.loading
        ? <p>Loading...</p>
        : (
          <>
            <p>hUSD balance: {contract.honestAsset}</p>
            {Object.entries(contract.basketAssets).map(([key, percentage]) => (
              <p key={key}>{key}: {percentage.toString()}</p>
            ))}
          </>
        )
    }</div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));