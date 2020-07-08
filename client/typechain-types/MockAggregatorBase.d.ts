/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface MockAggregatorBaseContract
  extends Truffle.Contract<MockAggregatorBaseInstance> {
  "new"(
    _initialAnswer: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<MockAggregatorBaseInstance>;
}

export interface AnswerUpdated {
  name: "AnswerUpdated";
  args: {
    current: BN;
    roundId: BN;
    timestamp: BN;
    0: BN;
    1: BN;
    2: BN;
  };
}

type AllEvents = AnswerUpdated;

export interface MockAggregatorBaseInstance extends Truffle.ContractInstance {
  latestAnswer(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    latestAnswer(txDetails?: Truffle.TransactionDetails): Promise<BN>;
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
