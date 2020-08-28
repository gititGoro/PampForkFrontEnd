/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CalculatorInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "calculateNumTokens(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "negativeDayCallback(int256,uint256,uint256,uint256)": FunctionFragment;
    "iterativelyCalculateOwedRewards(uint256,uint256,uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateNumTokens",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "negativeDayCallback",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "iterativelyCalculateOwedRewards",
    values: [BigNumberish, BigNumberish, BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateNumTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "negativeDayCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "iterativelyCalculateOwedRewards",
    data: BytesLike
  ): Result;

  events: {};
}

export class CalculatorInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CalculatorInterfaceInterface;

  functions: {
    calculateNumTokens(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      _streak: BigNumberish,
      balance: BigNumberish,
      daysStaked: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    negativeDayCallback(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    iterativelyCalculateOwedRewards(
      stakerLastTimestamp: BigNumberish,
      stakerStartTimestamp: BigNumberish,
      balance: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  calculateNumTokens(
    numerator: BigNumberish,
    denominator: BigNumberish,
    price: BigNumberish,
    volume: BigNumberish,
    _streak: BigNumberish,
    balance: BigNumberish,
    daysStaked: BigNumberish,
    stakerAddress: string,
    totalSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  negativeDayCallback(
    numerator: BigNumberish,
    denominator: BigNumberish,
    price: BigNumberish,
    volume: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  iterativelyCalculateOwedRewards(
    stakerLastTimestamp: BigNumberish,
    stakerStartTimestamp: BigNumberish,
    balance: BigNumberish,
    stakerAddress: string,
    totalSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    calculateNumTokens(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      _streak: BigNumberish,
      balance: BigNumberish,
      daysStaked: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    negativeDayCallback(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    iterativelyCalculateOwedRewards(
      stakerLastTimestamp: BigNumberish,
      stakerStartTimestamp: BigNumberish,
      balance: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    calculateNumTokens(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      _streak: BigNumberish,
      balance: BigNumberish,
      daysStaked: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish
    ): Promise<BigNumber>;
    negativeDayCallback(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish
    ): Promise<BigNumber>;
    iterativelyCalculateOwedRewards(
      stakerLastTimestamp: BigNumberish,
      stakerStartTimestamp: BigNumberish,
      balance: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateNumTokens(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish,
      _streak: BigNumberish,
      balance: BigNumberish,
      daysStaked: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish
    ): Promise<PopulatedTransaction>;
    negativeDayCallback(
      numerator: BigNumberish,
      denominator: BigNumberish,
      price: BigNumberish,
      volume: BigNumberish
    ): Promise<PopulatedTransaction>;
    iterativelyCalculateOwedRewards(
      stakerLastTimestamp: BigNumberish,
      stakerStartTimestamp: BigNumberish,
      balance: BigNumberish,
      stakerAddress: string,
      totalSupply: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}