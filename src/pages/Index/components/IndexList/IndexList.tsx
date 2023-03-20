import React, { FC, useState } from "react";
import { IndexListBlock, IndexListItemArrow, IndexListItemArrowHorizontalLine, IndexListItemArrowVerticalLine, IndexListItemBlock, IndexListItemContent, IndexListItemHeader, IndexListItemText, IndexListItemTitle } from "./IndexListStyles";

interface IIndexListItem {
  title: string;
  text: string;
}

interface IIndexList {
  items: IIndexListItem[];
}

const IndexListItem: FC<IIndexListItem> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IndexListItemBlock isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
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
};

const IndexList: FC<IIndexList> = ({ items }) => {
  return (
    <IndexListBlock>
      {items.map((item, idx) => {
        return <IndexListItem title={item.title} text={item.text} key={idx} />;
      })}
    </IndexListBlock>
  );
};

export default IndexList;
