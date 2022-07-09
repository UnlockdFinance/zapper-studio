/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface PirexPxCvxInterface extends utils.Interface {
  functions: {
    'DOMAIN_SEPARATOR()': FunctionFragment;
    'addEpochRewardMetadata(uint256,bytes32,uint256,uint256)': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'balanceOfAt(address,uint256)': FunctionFragment;
    'burn(address,uint256)': FunctionFragment;
    'decimals()': FunctionFragment;
    'getCurrentEpoch()': FunctionFragment;
    'getCurrentSnapshotId()': FunctionFragment;
    'getEpoch(uint256)': FunctionFragment;
    'getEpochRedeemedSnapshotRewards(address,uint256)': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'nonces(address)': FunctionFragment;
    'operator()': FunctionFragment;
    'operatorApprove(address,address,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setEpochRedeemedSnapshotRewards(address,uint256,uint256)': FunctionFragment;
    'setOperator(address)': FunctionFragment;
    'symbol()': FunctionFragment;
    'takeEpochSnapshot()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'totalSupplyAt(uint256)': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateEpochFuturesRewards(uint256,uint256[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DOMAIN_SEPARATOR'
      | 'addEpochRewardMetadata'
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'balanceOfAt'
      | 'burn'
      | 'decimals'
      | 'getCurrentEpoch'
      | 'getCurrentSnapshotId'
      | 'getEpoch'
      | 'getEpochRedeemedSnapshotRewards'
      | 'mint'
      | 'name'
      | 'nonces'
      | 'operator'
      | 'operatorApprove'
      | 'owner'
      | 'permit'
      | 'renounceOwnership'
      | 'setEpochRedeemedSnapshotRewards'
      | 'setOperator'
      | 'symbol'
      | 'takeEpochSnapshot'
      | 'totalSupply'
      | 'totalSupplyAt'
      | 'transfer'
      | 'transferFrom'
      | 'transferOwnership'
      | 'updateEpochFuturesRewards',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addEpochRewardMetadata',
    values: [BigNumberish, BytesLike, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'balanceOfAt', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'burn', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCurrentEpoch', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getCurrentSnapshotId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getEpoch', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getEpochRedeemedSnapshotRewards', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nonces', values: [string]): string;
  encodeFunctionData(functionFragment: 'operator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'operatorApprove', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'permit',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setEpochRedeemedSnapshotRewards',
    values: [string, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'setOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'takeEpochSnapshot', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupplyAt', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'updateEpochFuturesRewards', values: [BigNumberish, BigNumberish[]]): string;

  decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addEpochRewardMetadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOfAt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentEpoch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentSnapshotId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEpoch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEpochRedeemedSnapshotRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'operatorApprove', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEpochRedeemedSnapshotRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'takeEpochSnapshot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupplyAt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateEpochFuturesRewards', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SetOperator(address)': EventFragment;
    'Snapshot(uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'UpdateEpochFuturesRewards(uint256,uint256[])': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetOperator'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Snapshot'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateEpochFuturesRewards'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetOperatorEventObject {
  operator: string;
}
export type SetOperatorEvent = TypedEvent<[string], SetOperatorEventObject>;

export type SetOperatorEventFilter = TypedEventFilter<SetOperatorEvent>;

export interface SnapshotEventObject {
  id: BigNumber;
}
export type SnapshotEvent = TypedEvent<[BigNumber], SnapshotEventObject>;

export type SnapshotEventFilter = TypedEventFilter<SnapshotEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UpdateEpochFuturesRewardsEventObject {
  epoch: BigNumber;
  futuresRewards: BigNumber[];
}
export type UpdateEpochFuturesRewardsEvent = TypedEvent<[BigNumber, BigNumber[]], UpdateEpochFuturesRewardsEventObject>;

export type UpdateEpochFuturesRewardsEventFilter = TypedEventFilter<UpdateEpochFuturesRewardsEvent>;

export interface PirexPxCvx extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PirexPxCvxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    addEpochRewardMetadata(
      epoch: BigNumberish,
      token: BytesLike,
      snapshotReward: BigNumberish,
      futuresReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfAt(account: string, snapshotId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentSnapshotId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpoch(
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string[], BigNumber[], BigNumber[]] & {
        snapshotId: BigNumber;
        rewards: string[];
        snapshotRewards: BigNumber[];
        futuresRewards: BigNumber[];
      }
    >;

    getEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    operatorApprove(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      redeemed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    takeEpochSnapshot(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateEpochFuturesRewards(
      epoch: BigNumberish,
      futuresRewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  addEpochRewardMetadata(
    epoch: BigNumberish,
    token: BytesLike,
    snapshotReward: BigNumberish,
    futuresReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfAt(account: string, snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentSnapshotId(overrides?: CallOverrides): Promise<BigNumber>;

  getEpoch(
    epoch: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, string[], BigNumber[], BigNumber[]] & {
      snapshotId: BigNumber;
      rewards: string[];
      snapshotRewards: BigNumber[];
      futuresRewards: BigNumber[];
    }
  >;

  getEpochRedeemedSnapshotRewards(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  operator(overrides?: CallOverrides): Promise<string>;

  operatorApprove(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setEpochRedeemedSnapshotRewards(
    account: string,
    epoch: BigNumberish,
    redeemed: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setOperator(
    _operator: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  takeEpochSnapshot(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateEpochFuturesRewards(
    epoch: BigNumberish,
    futuresRewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    addEpochRewardMetadata(
      epoch: BigNumberish,
      token: BytesLike,
      snapshotReward: BigNumberish,
      futuresReward: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfAt(account: string, snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    burn(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentSnapshotId(overrides?: CallOverrides): Promise<BigNumber>;

    getEpoch(
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, string[], BigNumber[], BigNumber[]] & {
        snapshotId: BigNumber;
        rewards: string[];
        snapshotRewards: BigNumber[];
        futuresRewards: BigNumber[];
      }
    >;

    getEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    mint(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<string>;

    operatorApprove(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      redeemed: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    setOperator(_operator: string, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    takeEpochSnapshot(overrides?: CallOverrides): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateEpochFuturesRewards(
      epoch: BigNumberish,
      futuresRewards: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      spender?: string | null,
      amount?: null,
    ): ApprovalEventFilter;
    Approval(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'SetOperator(address)'(operator?: null): SetOperatorEventFilter;
    SetOperator(operator?: null): SetOperatorEventFilter;

    'Snapshot(uint256)'(id?: null): SnapshotEventFilter;
    Snapshot(id?: null): SnapshotEventFilter;

    'Transfer(address,address,uint256)'(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
    Transfer(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;

    'UpdateEpochFuturesRewards(uint256,uint256[])'(
      epoch?: BigNumberish | null,
      futuresRewards?: null,
    ): UpdateEpochFuturesRewardsEventFilter;
    UpdateEpochFuturesRewards(epoch?: BigNumberish | null, futuresRewards?: null): UpdateEpochFuturesRewardsEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addEpochRewardMetadata(
      epoch: BigNumberish,
      token: BytesLike,
      snapshotReward: BigNumberish,
      futuresReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfAt(account: string, snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentSnapshotId(overrides?: CallOverrides): Promise<BigNumber>;

    getEpoch(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    operatorApprove(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      redeemed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setOperator(_operator: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    takeEpochSnapshot(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateEpochFuturesRewards(
      epoch: BigNumberish,
      futuresRewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addEpochRewardMetadata(
      epoch: BigNumberish,
      token: BytesLike,
      snapshotReward: BigNumberish,
      futuresReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfAt(account: string, snapshotId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentSnapshotId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpoch(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorApprove(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setEpochRedeemedSnapshotRewards(
      account: string,
      epoch: BigNumberish,
      redeemed: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeEpochSnapshot(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateEpochFuturesRewards(
      epoch: BigNumberish,
      futuresRewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}