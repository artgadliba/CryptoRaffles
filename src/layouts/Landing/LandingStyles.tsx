import styled from "styled-components";

const LandingBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const LandingContent = styled.main`
  width: 100%;
  z-index: 999;
`;

export { LandingBlock, LandingContent };
