/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const factoryAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_admin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_reservesAdmin',
        type: 'address',
      },
      {
        internalType: 'contract IBDeployer',
        name: '_bDeployer',
        type: 'address',
      },
      {
        internalType: 'contract ICDeployer',
        name: '_cDeployer',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Factory',
        name: '_uniswapV2Factory',
        type: 'address',
      },
      {
        internalType: 'contract ISimpleUniswapOracle',
        name: '_simpleUniswapOracle',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'uniswapV2Pair',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'borrowable0',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'borrowable1',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lendingPoolId',
        type: 'uint256',
      },
    ],
    name: 'LendingPoolInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'NewAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldPendingAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newPendingAdmin',
        type: 'address',
      },
    ],
    name: 'NewPendingAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldReservesAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newReservesAdmin',
        type: 'address',
      },
    ],
    name: 'NewReservesAdmin',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldReservesManager',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newReservesManager',
        type: 'address',
      },
    ],
    name: 'NewReservesManager',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldReservesPendingAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newReservesPendingAdmin',
        type: 'address',
      },
    ],
    name: 'NewReservesPendingAdmin',
    type: 'event',
  },
  {
    constant: false,
    inputs: [],
    name: '_acceptAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: '_acceptReservesAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'newPendingAdmin',
        type: 'address',
      },
    ],
    name: '_setPendingAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'newReservesManager',
        type: 'address',
      },
    ],
    name: '_setReservesManager',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'newReservesPendingAdmin',
        type: 'address',
      },
    ],
    name: '_setReservesPendingAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allLendingPools',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'allLendingPoolsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'bDeployer',
    outputs: [
      {
        internalType: 'contract IBDeployer',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'cDeployer',
    outputs: [
      {
        internalType: 'contract ICDeployer',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'uniswapV2Pair',
        type: 'address',
      },
    ],
    name: 'createBorrowable0',
    outputs: [
      {
        internalType: 'address',
        name: 'borrowable0',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'uniswapV2Pair',
        type: 'address',
      },
    ],
    name: 'createBorrowable1',
    outputs: [
      {
        internalType: 'address',
        name: 'borrowable1',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'uniswapV2Pair',
        type: 'address',
      },
    ],
    name: 'createCollateral',
    outputs: [
      {
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'getLendingPool',
    outputs: [
      {
        internalType: 'bool',
        name: 'initialized',
        type: 'bool',
      },
      {
        internalType: 'uint24',
        name: 'lendingPoolId',
        type: 'uint24',
      },
      {
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrowable0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrowable1',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'uniswapV2Pair',
        type: 'address',
      },
    ],
    name: 'initializeLendingPool',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'pendingAdmin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'reservesAdmin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'reservesManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'reservesPendingAdmin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'simpleUniswapOracle',
    outputs: [
      {
        internalType: 'contract ISimpleUniswapOracle',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '_i',
        type: 'uint256',
      },
    ],
    name: 'uint2str',
    outputs: [
      {
        internalType: 'string',
        name: '_uintAsString',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'uniswapV2Factory',
    outputs: [
      {
        internalType: 'contract IUniswapV2Factory',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export type Factory = typeof factoryAbi;
export type FactoryContract = GetContractReturnType<Factory, PublicClient>;

export class Factory__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: factoryAbi, publicClient: client });
  }
}
