/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LendingPoolParametersProviderContract
  extends Truffle.Contract<LendingPoolParametersProviderInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<LendingPoolParametersProviderInstance>;
}

type AllEvents = never;

export interface LendingPoolParametersProviderInstance
  extends Truffle.ContractInstance {
  /**
   * initializes the LendingPoolParametersProvider after it's added to the proxy
   * @param _addressesProvider the address of the LendingPoolAddressesProvider
   */
  initialize: {
    (
      _addressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _addressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _addressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _addressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * returns the maximum stable rate borrow size, in percentage of the available liquidity.*
   */
  getMaxStableRateBorrowSizePercent(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * returns the delta between the current stable rate and the user stable rate at     which the borrow position of the user will be rebalanced (scaled down)*
   */
  getRebalanceDownRateDelta(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * returns the fee applied to a flashloan and the portion to redirect to the protocol, in basis points.*
   */
  getFlashLoanFeesInBips(
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN]>;

  methods: {
    /**
     * initializes the LendingPoolParametersProvider after it's added to the proxy
     * @param _addressesProvider the address of the LendingPoolAddressesProvider
     */
    initialize: {
      (
        _addressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _addressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _addressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _addressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * returns the maximum stable rate borrow size, in percentage of the available liquidity.*
     */
    getMaxStableRateBorrowSizePercent(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * returns the delta between the current stable rate and the user stable rate at     which the borrow position of the user will be rebalanced (scaled down)*
     */
    getRebalanceDownRateDelta(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * returns the fee applied to a flashloan and the portion to redirect to the protocol, in basis points.*
     */
    getFlashLoanFeesInBips(
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN]>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
