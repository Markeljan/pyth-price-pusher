import "./App.css";
import { contractData } from "../constants/contractData";
import { useAccount, useConnect, useContractRead, useDisconnect, useProvider } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [currentPrice, setCurrentPrice] = useState(0);
  const provider = useProvider();

  const {contractAddress, contractAbi} = contractData

  const feedId = '0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6'
  const feedIdBytes32 = ethers.utils.arrayify(feedId)
  console.log('feedIdBytes32', feedIdBytes32)

  const READ_CONTRACT = new ethers.Contract(contractAddress, contractAbi, provider)

  const handleReadContract = async () => {
    try {
      const price = await READ_CONTRACT.getCurrentPrice(feedIdBytes32);
      console.log('price', price);
      setCurrentPrice(price);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  if (isConnected)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Connected to {address}
        <ConnectButton />

        <p>{currentPrice}</p>
        <button onClick={handleReadContract}>Read Contract</button>
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ConnectButton />
    </div>
  );
}

export default App;