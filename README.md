# Nouwe Bridge

Nouwe Bridge is a cross-chain bridging solution leveraging Open Intents and Hyperlane to enable seamless interoperability between blockchain networks.

> [!NOTE]
> This UI is a modified version of Hyperlane's Warp Route UI.

## Overview

Nouwe Bridge is built using the [Hyperlane Warp Route](https://docs.hyperlane.xyz/docs/reference/applications/warp-routes) framework, which allows permissionless token bridging across different blockchain ecosystems.

## Architecture

The project is developed using the following technologies:

- **Next.js & React** – Modern frontend framework for building a fast and scalable UI.
- **Wagmi & RainbowKit** – Wallet connection and interaction with blockchain networks.
- **Hyperlane SDK** – Enables interchain messaging and cross-chain bridging.

Key file locations:

- Configuration constants are in `./src/consts/`.
- The main page is in `./src/pages/index.tsx`.
- Core functionality is implemented in `./src/features/`.

## Customization

To adjust tokens, branding, or other settings, refer to [CUSTOMIZE.md](./CUSTOMIZE.md).

## Development

### Setup

#### Configure

You will need a `projectId` from the WalletConnect Cloud to use the Nouwe Bridge UI. Sign up at [WalletConnect Cloud](https://cloud.walletconnect.com) to obtain a project ID.

#### Build

```sh
# Install dependencies
yarn

# Build the Next.js project
yarn build
```

### Run

Create a `.env.local` file based on `.env.example` and set `projectId` from WalletConnect Cloud.

```sh
# Start the development server
yarn dev

# Or specify a custom projectId
NEXT_PUBLIC_WALLET_CONNECT_ID=<projectId> yarn dev
```

### Test

```sh
# Lint check code
yarn lint

# Check code types
yarn typecheck
```

### Format

```sh
# Format code using Prettier
yarn prettier
```

### Clean / Reset

```sh
# Delete build artifacts
yarn clean
```

## Deployment

The recommended hosting solution for Nouwe Bridge is Vercel. Deploying on Vercel ensures scalability, performance, and ease of management.

## Learn More

For further details, check out the [Hyperlane documentation](https://docs.hyperlane.xyz/docs/reference/applications/warp-routes).