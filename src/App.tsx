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

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #2d0b5a;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppBlock>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/account" element={<Account />} />
        <Route path="/gives" element={<Gives />} />
        <Route path="/gives/:id" element={<Give />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<Collection />} />
      </Routes>
    </AppBlock>
  );
}

export default App;
