import "@rainbow-me/rainbowkit/styles.css";
import React, { ReactNode, FC, PropsWithChildren, useEffect } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import styled from "styled-components";
import RegisterModal from "./components/Modals/RegisterModal/RegisterModal";
import useModal from "./hooks/useModal";
import Account from "./pages/Account/Account";
import AccountPopUp from "./pages/Account/components/AccountPopUp/AccountPopUp";
import Collection from "./pages/Collection/Collection";
import Collections from "./pages/Collections/Collections";
import Give from "./pages/Give/Give";
import Gives from "./pages/Gives/Gives";
import Index from "./pages/Index/Index";
import { getDefaultWallets, RainbowKitProvider, Theme, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #2d0b5a;
  overflow-x: hidden;
`;

const alchemyKey: string = process.env.REACT_APP_ALCHEMY_SEPOLIA_LINK;
const infuraKey: string = process.env.REACT_APP_INFURA_SEPOLIA_KEY;

const { chains, provider } = configureChains(
  [mainnet, goerli, sepolia],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_SEPOLIA_KEY }),
    infuraProvider({ apiKey: process.env.REACT_APP_INFURA_SEPOLIA_KEY }),
    publicProvider()
  ],
);

const { connectors } = getDefaultWallets({
  appName: "CryptoRaffles App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const RainbowKitApp = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          fontStack: "rounded",
          borderRadius: "medium",
          overlayBlur: "small",
        })}
        appInfo={{
          appName: 'CryptoRaffles',
        }}
        showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

function App() {
  return (
      <RainbowKitApp>
        <AppBlock>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/account" element={<Account />} />
            <Route path="/giveaways" element={<Gives />} />
            <Route path="/giveaways/:id" element={<Give />} />
            <Route path="/raffles" element={<Collections />} />
            <Route path="/raffles/:id" element={<Collection />} />
          </Routes>
        </AppBlock>
      </RainbowKitApp>
  );
}

export default App;
