import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createClient, goerli } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';
import { avalancheFuji, avalanche } from 'wagmi/chains';
const { chains, provider } = configureChains([avalancheFuji, avalanche, goerli],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Pyth Price Pusher',
  projectId: 'PPP',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
)
