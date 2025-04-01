import { TokenStandard, type WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { zeroAddress } from 'viem';

const ROUTER = '0x01723ce114D77789e7B13CaC48a6960904072455';

const NETWORK_SEPARATOR = '101010';

export const TOP_MAX = {
  'arbitrumsepolia': {
    [zeroAddress]: 1e16,
  },
  'basesepolia': {
    [zeroAddress]: 1e16,
  },
  'sepolia': {
    [zeroAddress]: 1e16,
  },
  'holesky': {
    [zeroAddress]: 1e16,
  },
  'optimismsepolia': {
    [zeroAddress]: 1e16,
  },
  'sonicblaze': {
    [zeroAddress]: 1e16,
  },
  'cappucinotestnet': {
    [zeroAddress]: 1e16,
  }
}

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: zeroAddress,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'basesepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'cappucinotestnet',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'sepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'holesky',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|sonicblaze|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'sonicblaze',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|cappucinotestnet|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress
        },
        {
          token: 'ethereum|holesky|' + zeroAddress,
        },
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        }
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: TokenStandard.IntentNative,
      symbol: 'ETH',
    },
  ],
  options: {
    interchainFeeConstants: [
      {
        amount: 1e10,
        origin: ['arbitrumsepolia', 'basesepolia', 'cappucinotestnet', 'sepolia', 'holesky', 'optimismsepolia', 'sonicblaze'].join(
          NETWORK_SEPARATOR,
        ),
        destination: ['arbitrumsepolia', 'basesepolia', 'cappucinotestnet', 'sepolia', 'holesky', 'optimismsepolia', 'sonicblaze'].join(NETWORK_SEPARATOR),
        addressOrDenom: zeroAddress,
      }
    ],
  },
};
