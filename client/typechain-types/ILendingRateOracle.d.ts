/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ILendingRateOracleContract
  extends Truffle.Contract<ILendingRateOracleInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ILendingRateOracleInstance>;
}

type AllEvents = never;

export interface ILendingRateOracleInstance extends Truffle.ContractInstance {
  /**
   * returns the market borrow rate in ray*
   */
  getMarketBorrowRate(
    _asset: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * sets the market borrow rate. Rate value must be in ray*
   */
  setMarketBorrowRate: {
    (
      _asset: string,
      _rate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _asset: string,
      _rate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _asset: string,
      _rate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _asset: string,
      _rate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * returns the market borrow rate in ray*
     */
    getMarketBorrowRate(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * sets the market borrow rate. Rate value must be in ray*
     */
    setMarketBorrowRate: {
      (
        _asset: string,
        _rate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _asset: string,
        _rate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _asset: string,
        _rate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
        _rate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
