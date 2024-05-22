/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const keeperVestAbi = [
  {
    name: 'CommitOwnership',
    inputs: [
      {
        name: 'admin',
        type: 'address',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'ApplyOwnership',
    inputs: [
      {
        name: 'admin',
        type: 'address',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Deposit',
    inputs: [
      {
        name: 'provider',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'locktime',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'type',
        type: 'int128',
        indexed: false,
      },
      {
        name: 'ts',
        type: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Withdraw',
    inputs: [
      {
        name: 'provider',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ts',
        type: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Supply',
    inputs: [
      {
        name: 'prevSupply',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'supply',
        type: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'NewDelegation',
    inputs: [
      {
        name: 'delegator',
        type: 'address',
        indexed: true,
      },
      {
        name: 'gauge',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pct',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'cancel_time',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'expire_time',
        type: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'CancelledDelegation',
    inputs: [
      {
        name: 'delegator',
        type: 'address',
        indexed: true,
      },
      {
        name: 'gauge',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
      },
      {
        name: 'cancelled_by',
        type: 'address',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'token_addr',
        type: 'address',
      },
      {
        name: '_name',
        type: 'string',
      },
      {
        name: '_symbol',
        type: 'string',
      },
      {
        name: '_version',
        type: 'string',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'commit_transfer_ownership',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'apply_transfer_ownership',
    inputs: [],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'commit_smart_wallet_checker',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'apply_smart_wallet_checker',
    inputs: [],
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_last_user_slope',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'int128',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'user_point_history__ts',
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
      {
        name: '_idx',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'locked__end',
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'checkpoint',
    inputs: [],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'deposit_for',
    inputs: [
      {
        name: '_addr',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'create_lock',
    inputs: [
      {
        name: '_value',
        type: 'uint256',
      },
      {
        name: '_unlock_time',
        type: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'increase_amount',
    inputs: [
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'increase_unlock_time',
    inputs: [
      {
        name: '_unlock_time',
        type: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'withdraw',
    inputs: [],
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
      {
        name: '_t',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'balanceOfAt',
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
      {
        name: '_block',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'totalSupply',
    inputs: [
      {
        name: 't',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'totalSupplyAt',
    inputs: [
      {
        name: '_block',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'changeController',
    inputs: [
      {
        name: '_newController',
        type: 'address',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_delegated_to',
    inputs: [
      {
        name: '_delegator',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_delegation_data',
    inputs: [
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
      {
        name: '_idx',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'set_operator',
    inputs: [
      {
        name: '_operator',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'delegate_boost',
    inputs: [
      {
        name: '_delegator',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
      {
        name: '_receiver',
        type: 'address',
      },
      {
        name: '_pct',
        type: 'uint256',
      },
      {
        name: '_cancel_time',
        type: 'uint256',
      },
      {
        name: '_expire_time',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'cancel_delegation',
    inputs: [
      {
        name: '_delegator',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_adjusted_ve_balance',
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'update_delegation_records',
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'token',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'supply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'locked',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: 'amount',
        type: 'int128',
      },
      {
        name: 'end',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'epoch',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'point_history',
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'bias',
        type: 'int128',
      },
      {
        name: 'slope',
        type: 'int128',
      },
      {
        name: 'ts',
        type: 'uint256',
      },
      {
        name: 'blk',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'user_point_history',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
      {
        name: 'arg1',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'bias',
        type: 'int128',
      },
      {
        name: 'slope',
        type: 'int128',
      },
      {
        name: 'ts',
        type: 'uint256',
      },
      {
        name: 'blk',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'user_point_epoch',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'slope_changes',
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'int128',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'controller',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'transfersEnabled',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'version',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'decimals',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'future_smart_wallet_checker',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'smart_wallet_checker',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'admin',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'future_admin',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'delegation_count',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'operator_of',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
] as const;

export type KeeperVest = typeof keeperVestAbi;
export type KeeperVestContract = GetContractReturnType<KeeperVest, PublicClient>;

export class KeeperVest__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: keeperVestAbi, publicClient: client });
  }
}
