import React, { useEffect } from "react";
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
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import DefaultHeader from '../src/layouts/Default/components/DefaultHeader/DefaultHeader';

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #2d0b5a;
  overflow-x: hidden;
`;

const alchemyKey : string = process.env.REACT_APP_SOME_CONFIGURATION

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({apiKey: alchemyKey}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'CryptoRaffles App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: '...',
  },
  colors: {
    accentColor: '...',
    accentColorForeground: '...',
    actionButtonBorder: '...',
    actionButtonBorderMobile: '...',
    actionButtonSecondaryBackground: '...',
    closeButton: '...',
    closeButtonBackground: '...',
    connectButtonBackground: '...',
    connectButtonBackgroundError: '...',
    connectButtonInnerBackground: '...',
    connectButtonText: '...',
    connectButtonTextError: '...',
    connectionIndicator: '...',
    downloadBottomCardBackground: '...',
    downloadTopCardBackground: '...',
    error: '...',
    generalBorder: '...',
    generalBorderDim: '...',
    menuItemBackground: '...',
    modalBackdrop: '...',
    modalBackground: '...',
    modalBorder: '...',
    modalText: '...',
    modalTextDim: '...',
    modalTextSecondary: '...',
    profileAction: '...',
    profileActionHover: '...',
    profileForeground: '...',
    selectedOptionBorder: '...',
    standby: '...',
  },
  fonts: {
    body: '...',
  },
  radii: {
    actionButton: '...',
    connectButton: '...',
    menuButton: '...',
    modal: '...',
    modalMobile: '...',
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '...',
  },
};

function App() {
  return (
      <AppBlock>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
          {/* Add theme={myCustomTheme} inside RainbowKitProvider element to activate custom theme */}
          <Routes>
            <Route index element={<Index />} />
            <Route path="/account" element={<Account />} />
            <Route path="/gives" element={<Gives />} />
            <Route path="/gives/:id" element={<Give />} />
            <Route path="/raffles" element={<Collections />} />
            <Route path="/raffles/:id" element={<Collection />} />
          </Routes>
          </RainbowKitProvider>
        </WagmiConfig>
      </AppBlock>
  );
}

export default App;
