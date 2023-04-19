import React, { useState, useEffect } from "react";
import Default from "../../layouts/Default/Default";
import GivesItem from "./GivesItem/GivesItem";
import { GivesBlock } from "./GivesStyles";
import axios from "axios";


interface ITerm {
  condition: string;
}

interface IGiveawayData {
  giveaway_id: string;
  end_timestamp: number;
  image: string;
  paytoken: string;
  grand_prize: number;
  grand_prize_token?: number;
  grand_prize_winner?: string;
  minor_prize: number;
  minor_prize_tokens?: Array<number>;
  minor_prize_winners?: Array<string>;
  owner: string;
  giveaway_name: string;
  status: number;
  description: string;
  terms: Array<ITerm>;
}

const giveaways: Array<IGiveawayData> = [];

function Gives() {
  const [items, setItems] = useState(giveaways);

  useEffect(() => {
    let data;
    axios.get("http://127.0.0.1:8000/api/giveaways")
    .then(res => {
      data = res.data;
      setItems(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  if(items === undefined)
    return (
      <Default>
        <GivesBlock>
            <>
              {[...new Array(3)].map((_, idx) => (
                <GivesItem isFake key={idx} />
              ))}
            </>
        </GivesBlock>
      </Default>
    )
  return (
    <Default>
      <GivesBlock>
        {items.length < 3 ? (
          <>
            {items.map((item) => (
              <GivesItem item={item} key={item.giveaway_name} />
            ))}
            {[...new Array(3 - items.length)].map((_, idx) => (
              <GivesItem isFake key={idx} />
            ))}
          </>
        ) : (
          <>
            {items.map((item) => (
              <GivesItem item={item} key={item.giveaway_name} />
            ))}
            <GivesItem isFake />
          </>
        )}
      </GivesBlock>
    </Default>
  );
}

export default Gives;
