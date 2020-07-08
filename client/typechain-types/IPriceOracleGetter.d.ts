/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IPriceOracleGetterContract
  extends Truffle.Contract<IPriceOracleGetterInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IPriceOracleGetterInstance>;
}

type AllEvents = never;

export interface IPriceOracleGetterInstance extends Truffle.ContractInstance {
  /**
   * returns the asset price in ETH
   * *********
   */
  getAssetPrice(
    _asset: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    /**
     * returns the asset price in ETH
     * *********
     */
    getAssetPrice(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
