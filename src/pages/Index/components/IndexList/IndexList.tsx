import React, { FC, useState } from "react";
import {
  IndexListBlock,
  IndexListItemArrow,
  IndexListItemArrowHorizontalLine,
  IndexListItemArrowVerticalLine,
  IndexListItemBlock,
  IndexListItemContent,
  IndexListItemHeader,
  IndexListItemText,
  IndexListItemTitle
} from "./IndexListStyles";

interface IIndexListItem {
  title: string;
  text: string;
  openHeight?: number;
  openMobileHeight?: number;
  openMobileHeightSmall?: number;
}

interface IIndexList {
  items: IIndexListItem[];
}

const IndexListItem: FC<IIndexListItem> = ({ title, text, openHeight, openMobileHeight, openMobileHeightSmall }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IndexListItemBlock isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} openHeight={openHeight} openMobileHeight={openMobileHeight} openMobileHeightSmall={openMobileHeightSmall}>
      <IndexListItemHeader isOpen={isOpen}>
        <IndexListItemTitle>{title}</IndexListItemTitle>
        <IndexListItemArrow isOpen={isOpen}>
          <IndexListItemArrowHorizontalLine alt="horizontal-line" src="/images/horizontal-line.svg" />
          {!isOpen && <IndexListItemArrowVerticalLine alt="vertical-line" src="/images/vertical-line.svg" />}
        </IndexListItemArrow>
      </IndexListItemHeader>
      <IndexListItemContent>{isOpen && <IndexListItemText>{text}</IndexListItemText>}</IndexListItemContent>
    </IndexListItemBlock>
  );
}

const IndexList: FC<IIndexList> = ({ items }) => {
  return (
    <IndexListBlock>
      {items.map((item, idx) => {
        return <IndexListItem title={item.title} text={item.text} key={idx} openHeight={item.openHeight} openMobileHeight={item.openMobileHeight} openMobileHeightSmall={item.openMobileHeightSmall} />;
      })}
    </IndexListBlock>
  );
}

export default IndexList;
