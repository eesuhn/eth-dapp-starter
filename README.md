## `eth-dapp-starter`

![nextjs][nextjs] ![hardhat][hardhat] ![ethers][ethers] ![shadcn][shadcn] ![bun][bun]

### Getting Started

> [!IMPORTANT]
> Install `Bun` before proceeding. <br> `curl -fsSL https://bun.sh/install | bash`

1. `bun install` to install all necessary dependencies.

2. `bun run dev` to start the development server.

3. Initiate a new terminal, and `bun run test` to compile and test the smart contracts.

### Structure

```bash
.
├── contracts         # Solidity smart contracts
│   └── Lock.sol        # Sample contract
├── ignition
├── next-dapp
│   ├── public          # Public assets
│   └── src
│       ├── app           # Entry point
│       ├── components    # Reusable components
│       ├── lib           # Utility functions
│       └── pages         # Next.js pages
├── scripts           # Deploy and interact with smart contracts
│   └── deploy.ts
└── test              # Hardhat tests
    └── Lock.ts         # Sample test
```

### Deployment

> [!WARNING]
> Ensure your `.env` file is configured with the required environment variables.

1. Rename `.env.example` to `.env`.

2. Update `SEPOLIA_URL` and `PRIVATE_KEY` fields with your RPC URL and wallet private key.

3. Edit `scripts/deploy.ts` as needed for your deployment requirements.

4. `bun run deploy` to deploy the smart contracts.

### Additional Resources

- [Bun Documentation](https://bun.sh/docs)
- [Hardhat Documentation](https://hardhat.org/getting-started/)

<!-- Badges -->
[nextjs]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[hardhat]: https://img.shields.io/badge/Hardhat-f0d614?style=for-the-badge&logo=hardhat&logoColor=white
[ethers]: https://img.shields.io/badge/ethers.js-6651FF?style=for-the-badge&logo=ethereum&logoColor=white
[shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[bun]: https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge
