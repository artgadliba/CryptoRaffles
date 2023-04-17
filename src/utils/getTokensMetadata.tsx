import { ethers } from "ethers";
import { raffleAbi } from "./getAccountBalance";

const alchemyLinkSepolia = process.env.REACT_APP_ALCHEMY_SEPOLIA_LINK;

export async function getTokensMetadata(raffleAddress: string, owner: string, tokenIDs: Array<number>): Promise<string[]> {
  const provider = new ethers.providers.JsonRpcProvider(
    alchemyLinkSepolia
  );

  const viewContract = new ethers.Contract(raffleAddress, raffleAbi, provider);

  var tokensMetadataList = [];
  for (let i = 0; i < tokenIDs.length; i ++) {
    let raw_metadata = await viewContract.tokenURI(tokenIDs[i]);
    let metadata = JSON.parse(raw_metadata);
    let imageLink = metadata["image"];
    tokensMetadataList.push(imageLink);
  }

  return tokensMetadataList;
}
