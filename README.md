## `eth-dapp-starter`

![nextjs][nextjs] ![hardhat][hardhat] ![ethers][ethers] ![shadcn][shadcn] ![bun][bun]

> [!NOTE]
> This version is running on `Next.js 14` with `Webpack`. <br> <i>Check out branch [`nextjs-15`](https://github.com/eesuhn/eth-dapp-starter/tree/main) with `Turbopack` compatibility.</i>

### Getting Started 🚀

> [!IMPORTANT]
> Install `Bun` before proceeding. <br> `curl -fsSL https://bun.sh/install | bash`

1. `bun install` to install all necessary dependencies.

2. Start the development server for `Next.js`:
    ```bash
    bun run dev
    ```

3. In a new terminal, compile and test the smart contracts:
    ```bash
    bun run test
    ```

### Structure 🌴

```bash
.
├── config
├── contracts                    # Solidity smart contracts
│   └── SampleContract.sol         # Sample contract
├── next-dapp
│   ├── public                     # Public assets
│   └── src
│       ├── app                      # Entry point and page routes
│       └── components               # Reusable components
├── scripts                      # Deploy and interact with smart contracts
│   └── contracts.ts               # List of contracts to deploy
├── test                         # Hardhat tests
│   └── SampleContractTest.ts      # Sample test
└── utils                        # Utility functions
```

### Deployment 🌐

1. Copy `.env.example` to `.env`, and set the environment variables.
    > For local deployment, not all fields are required.

2. Specify the contracts to deploy in `scripts/contracts.ts`.

> [!WARNING]
> Ensure your `.env` file is configured correctly. Do not commit sensitive information.

#### Deploying to Testnet

1. `bun run deploy` to deploy on testnet.

#### Deploying Locally

1. Start a local node with `bun run local`.

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
