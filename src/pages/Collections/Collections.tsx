import React, { useState, useEffect } from "react";
import Default from "../../layouts/Default/Default";
import { CollectionsBlock } from "./CollectionsStyles";
import CollectionsItem from "./CollectionsItem/CollectionsItem";
import axios from "axios";

interface ICollectionData {
  raffle_id: string;
  end_timestamp: number;
  image: string;
  paytoken: string;
  entry_fee: number;
  grand_prize: number;
  grand_prize_token?: number;
  grand_prize_winner?: string;
  minor_prize: number;
  minor_prize_tokens?: Array<number>;
  minor_prize_winners?: Array<string>;
  owner: string;
  raffle_name: string;
  status: number;
  game_type: number;
  description: string;
}

export const collections: Array<ICollectionData> = [];

function Collections() {

  const [items, setItems] = useState(collections);

  useEffect(() => {
    let data;
    axios.get("http://127.0.0.1:8000/api/raffles")
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
        <CollectionsBlock>
            <>
              {[...new Array(3)].map((_, idx) => (
                <CollectionsItem isFake key={idx} />
              ))}
            </>
        </CollectionsBlock>
      </Default>
    )
  return (
    <Default>
      <CollectionsBlock>
        {items.length < 3 ? (
          <>
            {items.map((item) => (
              <CollectionsItem item={item} key={item.raffle_name} />
            ))}
            {[...new Array(3 - items.length)].map((_, idx) => (
              <CollectionsItem isFake key={idx} />
            ))}
          </>
        ) : (
          <>
            {items.map((item) => (
              <CollectionsItem item={item} key={item.raffle_name} />
            ))}
            <CollectionsItem isFake />
          </>
        )}
      </CollectionsBlock>
    </Default>
  );
}

export default Collections;
