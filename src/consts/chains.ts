import { arbitrumsepolia, basesepolia, holesky, optimismsepolia, sepolia, sonicblaze } from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // solanamainnet: {
  //   ...solanamainnet,
  //   // SVM chains require mailbox addresses for the token adapters
  //   mailbox: solanamainnetAddresses.mailbox,
  //   // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
  //   rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
  //     ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }, ...solanamainnet.rpcUrls]
  //     : solanamainnet.rpcUrls,
  // },
  // eclipsemainnet: {
  //   ...eclipsemainnet,
  //   mailbox: eclipsemainnetAddresses.mailbox,
  // },
  arbitrumsepolia: {
    ...arbitrumsepolia,
    rpcUrls: [{ http: 'https://sepolia-rollup.arbitrum.io/rpc' }],
  },
  basesepolia: {
    ...basesepolia,
    rpcUrls: [{ http: 'https://sepolia.base.org' }],
  },
  sepolia: {
    ...sepolia,
    rpcUrls: [{ http: 'https://1rpc.io/sepolia' }],
  },
  holesky: {
    ...holesky,
    rpcUrls: [{ http: 'https://1rpc.io/holesky' }],
  },
  optimismsepolia: {
    ...optimismsepolia,
    rpcUrls: [{ http: 'https://sepolia.optimism.io' }],
  },
  sonicblaze: {
    ...sonicblaze,
    rpcUrls: [{ http: 'https://rpc.blaze.soniclabs.com' }],
  },
  cappucinotestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 55214,
    domainId: 55214,
    logoURI: "/decaf.svg",
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    name: 'cappucinotestnet',
    displayName: 'Cappucino Testnet',
    mailbox: "0xD95d2F7C38bfA2f9d7A618474Bc619470f01001F",
    rpcUrls: [{
      http: 'https://nouwe-bridge.comingdotsoon.xyz'
    }],
    gasCurrencyCoinGeckoId: "ethereum",
    index: {
      "from": 0
    },
    isTestnet: true,
  }
};
