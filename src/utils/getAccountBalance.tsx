import { ethers } from "ethers";
import { raffleAbi } from "./abiStorage";
import { giveAbi } from "./abiStorage";

const alchemyLinkSepolia = process.env.REACT_APP_ALCHEMY_SEPOLIA_LINK;

export async function getAccountBalance(contractAddress: string, owner: string, raffle: boolean): Promise<number> {
  const provider = new ethers.providers.JsonRpcProvider(
    alchemyLinkSepolia
  );

  if (raffle === true) {
    let raffleViewContract = new ethers.Contract(contractAddress, raffleAbi, provider);
    const balance = await raffleViewContract.balanceOf(owner);

    return balance;
  } else {
    let giveViewContract = new ethers.Contract(contractAddress, giveAbi, provider);
    const balance = await giveViewContract.balanceOf(owner);

    return balance;
  }
}
