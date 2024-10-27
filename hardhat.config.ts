import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const { SEPOLIA_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {},
};

if (SEPOLIA_URL && PRIVATE_KEY) {
  config.networks!.sepolia = {
    url: SEPOLIA_URL,
    accounts: [PRIVATE_KEY],
  };
} else {
  console.warn("Warning: SEPOLIA_URL and/or PRIVATE_KEY not set in .env file.");
}

export default config;
