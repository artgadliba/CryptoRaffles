import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const GiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const GiveImage = styled.img`
  width: 100%;
  height: ${pxIntoRem(316)};
  object-fit: cover;
  margin-top: ${pxIntoRem(10)};
  border: ${pxIntoRem(1)} solid #746091;
  border-radius: ${pxIntoRem(2)};

  @media (max-width: 500px) {
    height: ${pxIntoRem(388)};
    margin-top: 0px;
  }
`;

const GiveInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${pxIntoRem(53)} ${pxIntoRem(74)} ${pxIntoRem(58)} ${pxIntoRem(70)};
  border-bottom: ${pxIntoRem(1)} solid rgba(255, 255, 255, 0.46);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${pxIntoRem(40)} ${pxIntoRem(74)} ${pxIntoRem(35)} ${pxIntoRem(16)};
  }
`;

const GiveInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const GiveInfoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${pxIntoRem(19)};
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${pxIntoRem(24)};
  }
`;

const GiveInfoItemTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  width: ${pxIntoRem(160)};
  color: rgba(255, 255, 255, 0.74);
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

interface IGiveInfoItemValue {
  color?: string;
}

const GiveInfoItemValue = styled.span<IGiveInfoItemValue>`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(20)};
  line-height: 111.5%;
  color: ${({ color }) => color ?? "#ffffff"};
  margin-left: ${pxIntoRem(58)};
  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(58 * 0.4)};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(5)};
  }
`;

const GiveInfoSumm = styled.div`
  margin-left: ${pxIntoRem(44)};
  padding-bottom: ${pxIntoRem(18)};
  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(44 * 0.4)};
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-top: ${pxIntoRem(24)};
    padding-bottom: 0;
  }
`;

const GiveInfoSummTitle = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 111.5%;
  color: rgba(255, 255, 255, 0.74);
`;

const GiveInfoSummValue = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(20)};
  line-height: 111.5%;
  color: #ffffff;
  margin-left: ${pxIntoRem(60)};
  @media (max-width: 1450px) {
    margin-left: ${pxIntoRem(60 * 0.4)};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(2)};
  }
`;

const GiveInfoSummValueImage = styled.img`
  width: ${pxIntoRem(26.77)};
  height: ${pxIntoRem(32.37)};
  margin-right: ${pxIntoRem(6)};
  position: relative;
  top: ${pxIntoRem(4)};
`;

const GiveInfoTimer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: auto;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(47)};
  }
`;

const GiveInfoTimerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GiveInfoTimerNumber = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.23)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px ${pxIntoRem(4.24)} ${pxIntoRem(6.36)} rgba(0, 0, 0, 0.07);
`;

const GiveInfoTimerText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(13)};
  line-height: ${pxIntoRem(20)};
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
`;

interface IGiveInfoTimerSplitter {
  marginRight: number;
  marginLeft: number;
}

const GiveInfoTimerSplitter = styled.span<IGiveInfoTimerSplitter>`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(39.2)};
  line-height: 111.5%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  top: ${pxIntoRem(-15)};
  margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};

  @media (max-width: 1450px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight * 0.5)} 0px ${pxIntoRem(marginLeft * 0.5)}`};
  }

  @media (max-width: 500px) {
    margin: ${({ marginRight, marginLeft }) => `0px ${pxIntoRem(marginRight)} 0px ${pxIntoRem(marginLeft)}`};
  }
`;

const GiveActive = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 500px) {
    padding-bottom: ${pxIntoRem(30)};
  }
`;

const GiveDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(40)} ${pxIntoRem(67)} ${pxIntoRem(10)} ${pxIntoRem(67)};
  @media (max-width: 500px) {
    padding: ${pxIntoRem(34)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(2)};
  }
`;

const GiveDescriptionTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const GiveDescriptionText = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: ${pxIntoRem(15)};
  line-height: ${pxIntoRem(24.5)};
  color: #ffffff;
  margin-top: ${pxIntoRem(24)};
  span {
    font-family: inherit;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
    line-height: ${pxIntoRem(25)};
  }
`;

const GiveConditions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(48)} ${pxIntoRem(67)} ${pxIntoRem(10)} ${pxIntoRem(67)};
  @media (max-width: 500px) {
    padding: ${pxIntoRem(24)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(2)};
  }
`;

const GiveConditionsTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const GiveConditionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: ${pxIntoRem(37)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
  }
`;

const GiveConditionsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(13)};
  &:first-of-type {
    margin-top: 0px;
  }

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const GiveConditionsListItemDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(26)};
  height: ${pxIntoRem(27)};
  background-color: #874dec;
  border-radius: 100%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  text-align: center;
  color: #ffffff;
  flex-shrink: 0;
`;

const GiveConditionsListItemText = styled.span`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(15)};
  line-height: 172.52%;
  color: #ffffff;
  margin-left: ${pxIntoRem(16)};

  @media (max-width: 500px) {
    line-height: ${pxIntoRem(24)};
  }
`;

const GiveRegisterButton = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(23)} ${pxIntoRem(95)};
  background-color: #08e2bd;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(70)};
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: #23f7d3;
    box-shadow: 0 0 15px #23f7d3;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    line-height: ${pxIntoRem(18)};
    margin-left: 0;
    width: 100%;
    padding: ${pxIntoRem(17)} ${pxIntoRem(37)};
    margin-top: ${pxIntoRem(30)};
  }
`;

const GiveRegisterButtonInactive = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(18)};
  line-height: ${pxIntoRem(22)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d0b5a;
  padding: ${pxIntoRem(23)} ${pxIntoRem(95)};
  background-color: #a7a8a8;
  border-radius: ${pxIntoRem(2)};
  width: fit-content;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(70)};
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    line-height: ${pxIntoRem(18)};
    margin-left: 0;
    width: 100%;
    padding: ${pxIntoRem(17)} ${pxIntoRem(37)};
    margin-top: ${pxIntoRem(30)};
  }
`;

const GiveDone = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxIntoRem(65)} ${pxIntoRem(200)} ${pxIntoRem(10)} ${pxIntoRem(69)};
  @media (max-width: 1200px) {
    padding: ${pxIntoRem(65)} ${pxIntoRem(200 * 0.5)} ${pxIntoRem(10)} ${pxIntoRem(69)};
  }

  @media (max-width: 500px) {
    align-items: center;
    padding: ${pxIntoRem(30)} ${pxIntoRem(15)} ${pxIntoRem(0)} ${pxIntoRem(15)};
  }
`;

const GiveDoneTitle = styled.h2`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(21)};
  line-height: 111.5%;
  color: #ffffff;
`;

const GiveDoneContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const GiveDoneLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(50)};
  }
`;

const GiveDoneLogo = styled.img`
  width: ${pxIntoRem(330)};
  position: relative;
  top: ${pxIntoRem(-36)};
  left: ${pxIntoRem(10)};
  z-index: 999;

  @media (max-width: 500px) {
    width: ${pxIntoRem(262)};
    height: ${pxIntoRem(282)};
    top: 0;
    left: 0;
  }
`;

const GiveDoneLogoBackground = styled.img`
  position: absolute;
  left: ${pxIntoRem(285)};
  top: ${pxIntoRem(335)};
  opacity: 0.3;
  width: ${pxIntoRem(1259)};
  height: ${pxIntoRem(1170)};
  pointer-events: none;
  @media (max-width: 500px) {
    top: ${pxIntoRem(800)};
    left: ${pxIntoRem(-600)};
  }
`;

export {
  GiveBlock,
  GiveImage,
  GiveInfo,
  GiveInfoItems,
  GiveInfoItem,
  GiveInfoItemTitle,
  GiveInfoItemValue,
  GiveInfoSumm,
  GiveInfoSummTitle,
  GiveInfoSummValue,
  GiveInfoSummValueImage,
  GiveInfoTimer,
  GiveInfoTimerColumn,
  GiveInfoTimerNumber,
  GiveInfoTimerSplitter,
  GiveInfoTimerText,
  GiveDescription,
  GiveDescriptionText,
  GiveDescriptionTitle,
  GiveConditions,
  GiveConditionsTitle,
  GiveConditionsList,
  GiveConditionsListItem,
  GiveConditionsListItemDot,
  GiveConditionsListItemText,
  GiveRegisterButton,
  GiveRegisterButtonInactive,
  GiveActive,
  GiveDone,
  GiveDoneContent,
  GiveDoneTitle,
  GiveDoneLogo,
  GiveDoneLogoBackground,
  GiveDoneLogoBlock,
};
