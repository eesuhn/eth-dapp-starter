## `eth-dapp-starter`

![Next.js][Next.js] ![Hardhat][Hardhat] ![ethers][ethers] ![shadcn][shadcn] ![bun][bun]

### Setting Up...

> [!WARNING]
> Please install `Bun` before proceeding. <br> `curl -fsSL https://bun.sh/install | bash`

1. `bun install` to install dependencies.

2. `bun run dev` to start the development server.

3. In another terminal, `bun run test` to compile and test the smart contracts.

### Project Structure

```bash
.
├── contracts           # Solidity smart contracts.
│   └── Lock.sol
├── ignition
├── next-dapp
│   ├── public          # Static assets.
│   └── src
│       ├── app         # Main entry point.
│       ├── components  # Reusable components.
│       ├── lib         # Utility functions.
│       └── pages       # Pages.
├── scripts             # Scripts to deploy and interact with smart contracts.
└── test                # Tests for smart contracts.
    └── Lock.ts
```

<!-- Links -->

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[Hardhat]: https://img.shields.io/badge/Hardhat-f0d614?style=for-the-badge&logo=hardhat&logoColor=white
[ethers]: https://img.shields.io/badge/ethers.js-6651FF?style=for-the-badge&logo=ethereum&logoColor=white
[shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[bun]: https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=for-the-badge
