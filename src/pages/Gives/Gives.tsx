import React, { useState } from "react";
import Default from "../../layouts/Default/Default";
import GivesItem from "./GivesItem/GivesItem";
import { GivesBlock } from "./GivesStyles";

function Gives() {
  const [items, setItems] = useState([
    {
      id: "Raffle # 0x323ff",
      wallet: "@ Nike",
      price: "$9,445",
      timerDate: Date.now(),
    },
    {
      id: "Raffle # 7fh12ba",
      wallet: "@ Baxter",
      price: "$100,087",
      timerDate: Date.now(),
    },
    {
      id: "Raffle # 3da71c5",
      wallet: "@ Jango",
      price: "$49,615",
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
