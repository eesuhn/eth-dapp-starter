## `nextjs-hardhat-starter`

![Next.js][Next.js] ![Hardhat][Hardhat] ![Solidity][Solidity] ![shadcn][shadcn] ![Tailwind][Tailwind]

### Setting Up...

> [!WARNING]
> Please install `Bun` before proceeding. <br> `curl -fsSL https://bun.sh/install | bash`

1. `bun install` to install dependencies.

2. `bun run dev` to start the development server.

3. In another terminal, run the following commands to compile and test the smart contracts:
	```bash
	bun run hardhat:compile
	bun run hardhat:test     # This line alone compile as well.
	```

### Project Structure

```bash
.
├── contracts       # Contains Solidity smart contracts.
│   └── Lock.sol    # Example smart contract.
├── ignition
│   └── modules
├── public          # Stores static assets like images, fonts, etc.
├── scripts         # Scripts to deploy and interact with the smart contracts.
├── src
│   ├── app         # Main entry point of the application.
│   ├── components  # Reusable components.
│   ├── lib         # Utility functions, constants, hooks, or other libraries.
│   └── pages       # Pages of the application.
└── test            # Contains tests for the smart contracts.
    └── Lock.ts     # Example test file.
```

<!-- Links -->

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[Hardhat]: https://img.shields.io/badge/Hardhat-2F80ED?style=for-the-badge&logo=hardhat&logoColor=white
[Solidity]: https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white
[shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
