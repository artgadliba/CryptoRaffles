import { ethers } from "ethers";
import { aggregatorV3InterfaceABI } from "./abiStorage";

const alchemyLinkSepolia = process.env.REACT_APP_ALCHEMY_SEPOLIA_LINK;

export async function getETHPrice(): Promise<number> {
  const provider = new ethers.providers.JsonRpcProvider(
    alchemyLinkSepolia
  );
  // The address of the contract which will provide the conversion rate of ETH/USD in Sepolia Network
  const addr = '0x694AA1769357215DE4FAC081bf1f309aDC325306';
  // We create an instance of the contract which we can interact with
  const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider);
  // We get the data from the last round of the contract
  let roundData = await priceFeed.latestRoundData();
  // Determine how many decimals the price feed has (10**decimals)
  let decimals = await priceFeed.decimals();
  // We convert the price to a number and return it
  return Number((roundData.answer.toString() / Math.pow(10, decimals)).toFixed(2));
}
