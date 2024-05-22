/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const illuviumSushiLpPoolV2Abi = [
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'fnSelector',
        type: 'bytes4',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'AccessDenied',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'fnSelector',
        type: 'bytes4',
      },
      {
        internalType: 'uint8',
        name: 'paramIndex',
        type: 'uint8',
      },
    ],
    name: 'InvalidInput',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'fnSelector',
        type: 'bytes4',
      },
      {
        internalType: 'uint256',
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    name: 'InvalidState',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'fnSelector',
        type: 'bytes4',
      },
      {
        internalType: 'uint8',
        name: 'paramIndex',
        type: 'uint8',
      },
    ],
    name: 'ZeroInput',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogClaimVaultRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'sILV',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogClaimYieldRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalV1WeightAdded',
        type: 'uint256',
      },
    ],
    name: 'LogMigrateLockedStakes',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint248',
        name: 'previousTotalWeight',
        type: 'uint248',
      },
      {
        indexed: false,
        internalType: 'uint248',
        name: 'newTotalWeight',
        type: 'uint248',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'previousYield',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newYield',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'previousRevDis',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newRevDis',
        type: 'uint128',
      },
    ],
    name: 'LogMoveFundsFromWallet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogReceiveVaultRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'previousVault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newVault',
        type: 'address',
      },
    ],
    name: 'LogSetVault',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stakeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'lockUntil',
        type: 'uint64',
      },
    ],
    name: 'LogStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yieldRewardsPerWeight',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'lastYieldDistribution',
        type: 'uint64',
      },
    ],
    name: 'LogSync',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stakeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isYield',
        type: 'bool',
      },
    ],
    name: 'LogUnstakeLocked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'unstakingYield',
        type: 'bool',
      },
    ],
    name: 'LogUnstakeLockedMultiple',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yieldValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'revDisValue',
        type: 'uint256',
      },
    ],
    name: 'LogUpdateRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_users',
        type: 'address[]',
      },
    ],
    name: 'blacklistUsers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_useSILV',
        type: 'bool',
      },
    ],
    name: 'claimAllRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimVaultRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_staker',
        type: 'address',
      },
    ],
    name: 'claimVaultRewardsFromRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_useSILV',
        type: 'bool',
      },
    ],
    name: 'claimYieldRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_staker',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_useSILV',
        type: 'bool',
      },
    ],
    name: 'claimYieldRewardsFromRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_stakeId',
        type: 'uint256',
      },
    ],
    name: 'getStake',
    outputs: [
      {
        components: [
          {
            internalType: 'uint120',
            name: 'value',
            type: 'uint120',
          },
          {
            internalType: 'uint64',
            name: 'lockedFrom',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'lockedUntil',
            type: 'uint64',
          },
          {
            internalType: 'bool',
            name: 'isYield',
            type: 'bool',
          },
        ],
        internalType: 'struct Stake.Data',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getStakesLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalReserves',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalReserves',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_position',
        type: 'uint256',
      },
    ],
    name: 'getV1StakeId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_desiredId',
        type: 'uint256',
      },
    ],
    name: 'getV1StakePosition',
    outputs: [
      {
        internalType: 'uint256',
        name: 'position',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'globalWeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'ilv_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'silv_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_poolToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: '_initTime',
        type: 'uint64',
      },
      {
        internalType: 'uint32',
        name: '_weight',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_corePoolV1',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'v1StakeMaxPeriod_',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isBlacklisted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isFlashPool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastYieldDistribution',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_stakeIds',
        type: 'uint256[]',
      },
    ],
    name: 'migrateLockedStakes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'moveFundsFromWallet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldPause',
        type: 'bool',
      },
    ],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_staker',
        type: 'address',
      },
    ],
    name: 'pendingRewards',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pendingYield',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pendingRevDis',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolTokenReserve',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'receiveVaultRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_v1GlobalWeight',
        type: 'uint256',
      },
    ],
    name: 'setV1GlobalWeight',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault_',
        type: 'address',
      },
    ],
    name: 'setVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_weight',
        type: 'uint32',
      },
    ],
    name: 'setWeight',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: '_lockDuration',
        type: 'uint64',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sync',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_stakeId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'stakeId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        internalType: 'struct CorePool.UnstakeParameter[]',
        name: '_stakes',
        type: 'tuple[]',
      },
      {
        internalType: 'bool',
        name: '_unstakingYield',
        type: 'bool',
      },
    ],
    name: 'unstakeMultiple',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'users',
    outputs: [
      {
        internalType: 'uint128',
        name: 'pendingYield',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'pendingRevDis',
        type: 'uint128',
      },
      {
        internalType: 'uint248',
        name: 'totalWeight',
        type: 'uint248',
      },
      {
        internalType: 'uint8',
        name: 'v1IdsLength',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'yieldRewardsPerWeightPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vaultRewardsPerWeightPaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'v1GlobalWeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'v1StakesWeights',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vaultRewardsPerWeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'weight',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'yieldRewardsPerWeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export type IlluviumSushiLpPoolV2 = typeof illuviumSushiLpPoolV2Abi;
export type IlluviumSushiLpPoolV2Contract = GetContractReturnType<IlluviumSushiLpPoolV2, PublicClient>;

export class IlluviumSushiLpPoolV2__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: illuviumSushiLpPoolV2Abi, publicClient: client });
  }
}