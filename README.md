## `eth-dapp-starter`

![nextjs][nextjs] ![hardhat][hardhat] ![ethers][ethers] ![shadcn][shadcn] ![bun][bun]

### Getting Started 🚀

> [!IMPORTANT]
> Install `Bun` before proceeding. <br> `curl -fsSL https://bun.sh/install | bash`

1. `bun install` to install all necessary dependencies.

2. `bun run dev` to start the development server.

3. Initiate a new terminal, and `bun run test` to compile and test the smart contracts.

### Structure 🌴

```bash
.
├── config
├── contracts                    # Solidity smart contracts
│   └── SampleContract.sol         # Sample contract
├── next-dapp
│   ├── public                     # Public assets
│   └── src
│       ├── app                      # Entry point
│       ├── components               # Reusable components
│       ├── lib                      # Utility functions
│       └── pages                    # Next.js pages
├── scripts                      # Deploy and interact with smart contracts
│   └── contracts.ts               # List of contracts to deploy
├── test                         # Hardhat tests
│   └── SampleContractTest.ts      # Sample test
└── utils                        # Utility functions
```

### Deployment 🌐

1. Rename `.env.example` to `.env`, and update the environment variables.

2. Include the list of contracts to deploy in `scripts/contracts.ts`.

3. `bun run deploy` to deploy on testnet.

> [!WARNING]
> Ensure your `.env` file is configured correctly, do not commit sensitive information.

#### Deploying Locally

1. `bun run local` to start a local node.

2. `bun run deploy:local` to deploy locally.

### Additional Resources 📃

- [Bun Documentation](https://bun.sh/docs)
- [Hardhat Documentation](https://hardhat.org/getting-started/)

<!-- Badges -->
[nextjs]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[hardhat]: https://img.shields.io/badge/Hardhat-f0d614?style=for-the-badge&logo=hardhat&logoColor=white
[ethers]: https://img.shields.io/badge/ethers.js-6651FF?style=for-the-badge&logo=ethereum&logoColor=white
[shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[bun]: https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge
