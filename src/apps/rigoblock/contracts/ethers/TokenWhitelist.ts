/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface TokenWhitelistInterface extends utils.Interface {
  functions: {
    'batchUpdateTokens(address[],bool[])': FunctionFragment;
    'getAuthority()': FunctionFragment;
    'isWhitelistedToken(address)': FunctionFragment;
    'removeToken(address)': FunctionFragment;
    'whitelistToken(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'batchUpdateTokens'
      | 'getAuthority'
      | 'isWhitelistedToken'
      | 'removeToken'
      | 'whitelistToken',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'batchUpdateTokens',
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]],
  ): string;
  encodeFunctionData(functionFragment: 'getAuthority', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isWhitelistedToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'removeToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'whitelistToken', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'batchUpdateTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuthority', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isWhitelistedToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistToken', data: BytesLike): Result;

  events: {
    'Whitelisted(address,bool)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Whitelisted'): EventFragment;
}

export interface WhitelistedEventObject {
  token: string;
  isWhitelisted: boolean;
}
export type WhitelistedEvent = TypedEvent<[string, boolean], WhitelistedEventObject>;

export type WhitelistedEventFilter = TypedEventFilter<WhitelistedEvent>;

export interface TokenWhitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenWhitelistInterface;

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
    batchUpdateTokens(
      tokens: PromiseOrValue<string>[],
      whitelisted: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getAuthority(overrides?: CallOverrides): Promise<[string]>;

    isWhitelistedToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    whitelistToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  batchUpdateTokens(
    tokens: PromiseOrValue<string>[],
    whitelisted: PromiseOrValue<boolean>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getAuthority(overrides?: CallOverrides): Promise<string>;

  isWhitelistedToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  removeToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  whitelistToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    batchUpdateTokens(
      tokens: PromiseOrValue<string>[],
      whitelisted: PromiseOrValue<boolean>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    getAuthority(overrides?: CallOverrides): Promise<string>;

    isWhitelistedToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    removeToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    whitelistToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Whitelisted(address,bool)'(token?: PromiseOrValue<string> | null, isWhitelisted?: null): WhitelistedEventFilter;
    Whitelisted(token?: PromiseOrValue<string> | null, isWhitelisted?: null): WhitelistedEventFilter;
  };

  estimateGas: {
    batchUpdateTokens(
      tokens: PromiseOrValue<string>[],
      whitelisted: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getAuthority(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelistedToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    whitelistToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchUpdateTokens(
      tokens: PromiseOrValue<string>[],
      whitelisted: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getAuthority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isWhitelistedToken(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    whitelistToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
