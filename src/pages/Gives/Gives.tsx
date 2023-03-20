import React, { useState } from "react";
import Default from "../../layouts/Default/Default";
import GivesItem from "./GivesItem/GivesItem";
import { GivesBlock } from "./GivesStyles";

function Gives() {
  const [items, setItems] = useState([
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
    },
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
    },
    {
      id: "Raffle # 54c1ae03",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
    },
  ]);

  return (
    <Default>
      <GivesBlock>
        {items.length < 3 ? (
          <>
            {items.map((item) => (
              <GivesItem item={item} key={item.id} />
            ))}
            {[...new Array(3 - items.length)].map((_, idx) => (
              <GivesItem isFake key={idx} />
            ))}
          </>
        ) : (
          <>
            {items.map((item) => (
              <GivesItem item={item} key={item.id} />
            ))}
            <GivesItem isFake />
          </>
        )}
      </GivesBlock>
    </Default>
  );
}

export default Gives;
