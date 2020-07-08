/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface GenericOracleIContract
  extends Truffle.Contract<GenericOracleIInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<GenericOracleIInstance>;
}

export interface AssetPriceUpdated {
  name: "AssetPriceUpdated";
  args: {
    _asset: string;
    _price: BN;
    timestamp: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface EthPriceUpdated {
  name: "EthPriceUpdated";
  args: {
    _price: BN;
    timestamp: BN;
    0: BN;
    1: BN;
  };
}

export interface ProphecySubmitted {
  name: "ProphecySubmitted";
  args: {
    _sybil: string;
    _asset: string;
    _sybilProphecy: BN;
    _oracleProphecy: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

type AllEvents = AssetPriceUpdated | EthPriceUpdated | ProphecySubmitted;

export interface GenericOracleIInstance extends Truffle.ContractInstance {
  getAssetPrice(
    _asset: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getEthUsdPrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    getAssetPrice(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getEthUsdPrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;
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
