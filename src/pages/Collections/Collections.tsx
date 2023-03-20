import React, { useState } from "react";
import Default from "../../layouts/Default/Default";
import { CollectionsBlock } from "./CollectionsStyles";
import CollectionsItem from "./CollectionsItem/CollectionsItem";

function Collections() {
  const [items, setItems] = useState([
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
    },
  ]);

  return (
    <Default>
      <CollectionsBlock>
        {items.length < 3 ? (
          <>
            {items.map((item) => (
              <CollectionsItem item={item} key={item.id} />
            ))}
            {[...new Array(3 - items.length)].map((_, idx) => (
              <CollectionsItem isFake key={idx} />
            ))}
          </>
        ) : (
          <>
            {items.map((item) => (
              <CollectionsItem item={item} key={item.id} />
            ))}
            <CollectionsItem isFake />
          </>
        )}
      </CollectionsBlock>
    </Default>
  );
}

export default Collections;
