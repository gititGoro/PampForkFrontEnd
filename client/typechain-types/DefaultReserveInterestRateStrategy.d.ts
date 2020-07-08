/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DefaultReserveInterestRateStrategyContract
  extends Truffle.Contract<DefaultReserveInterestRateStrategyInstance> {
  "new"(
    _reserve: string,
    _provider: string,
    _baseVariableBorrowRate: number | BN | string,
    _variableRateSlope1: number | BN | string,
    _variableRateSlope2: number | BN | string,
    _stableRateSlope1: number | BN | string,
    _stableRateSlope2: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<DefaultReserveInterestRateStrategyInstance>;
}

type AllEvents = never;

export interface DefaultReserveInterestRateStrategyInstance
  extends Truffle.ContractInstance {
  EXCESS_UTILIZATION_RATE(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  OPTIMAL_UTILIZATION_RATE(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  addressesProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

  baseVariableBorrowRate(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  reserve(txDetails?: Truffle.TransactionDetails): Promise<string>;

  stableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  stableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  variableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  variableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * accessors
   */
  getBaseVariableBorrowRate(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getVariableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getVariableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getStableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getStableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * calculates the interest rates depending on the available liquidity and the total borrowed.
   * @param _availableLiquidity the liquidity available in the reserve
   * @param _averageStableBorrowRate the weighted average of all the stable rate borrows
   * @param _reserve the address of the reserve
   * @param _totalBorrowsStable the total borrowed from the reserve a stable rate
   * @param _totalBorrowsVariable the total borrowed from the reserve at a variable rate
   * @returns the liquidity rate, stable borrow rate and variable borrow rate calculated from the input parameters*
   */
  calculateInterestRates(
    _reserve: string,
    _availableLiquidity: number | BN | string,
    _totalBorrowsStable: number | BN | string,
    _totalBorrowsVariable: number | BN | string,
    _averageStableBorrowRate: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN, BN]>;

  methods: {
    EXCESS_UTILIZATION_RATE(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    OPTIMAL_UTILIZATION_RATE(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    addressesProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

    baseVariableBorrowRate(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    reserve(txDetails?: Truffle.TransactionDetails): Promise<string>;

    stableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    stableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    variableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    variableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * accessors
     */
    getBaseVariableBorrowRate(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getVariableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getVariableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getStableRateSlope1(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getStableRateSlope2(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * calculates the interest rates depending on the available liquidity and the total borrowed.
     * @param _availableLiquidity the liquidity available in the reserve
     * @param _averageStableBorrowRate the weighted average of all the stable rate borrows
     * @param _reserve the address of the reserve
     * @param _totalBorrowsStable the total borrowed from the reserve a stable rate
     * @param _totalBorrowsVariable the total borrowed from the reserve at a variable rate
     * @returns the liquidity rate, stable borrow rate and variable borrow rate calculated from the input parameters*
     */
    calculateInterestRates(
      _reserve: string,
      _availableLiquidity: number | BN | string,
      _totalBorrowsStable: number | BN | string,
      _totalBorrowsVariable: number | BN | string,
      _averageStableBorrowRate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN, BN]>;
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
