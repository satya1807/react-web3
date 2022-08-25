import { useMetamask } from 'contexts/Metamask';

function App() {
  const { account, connect, disconnect } = useMetamask();
  return (
    <div>
      {account ? <p>connected to {account}</p> : <button onClick={connect}>Connect Wallet</button>}
      {account && <button onClick={disconnect}>disconnect</button>}
    </div>
  );
}

export default App;
