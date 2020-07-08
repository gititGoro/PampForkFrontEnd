/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ILendingPoolAddressesProviderContract
  extends Truffle.Contract<ILendingPoolAddressesProviderInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ILendingPoolAddressesProviderInstance>;
}

type AllEvents = never;

export interface ILendingPoolAddressesProviderInstance
  extends Truffle.ContractInstance {
  getLendingPool(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingPoolImpl: {
    (_pool: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_pool: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _pool: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _pool: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolCore(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingPoolCoreImpl: {
    (_lendingPoolCore: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _lendingPoolCore: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingPoolCore: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingPoolCore: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolConfigurator(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolConfiguratorImpl: {
    (_configurator: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _configurator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _configurator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _configurator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolDataProvider(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolDataProviderImpl: {
    (_provider: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _provider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _provider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _provider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolParametersProvider(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolParametersProviderImpl: {
    (
      _parametersProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _parametersProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _parametersProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _parametersProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getTokenDistributor(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setTokenDistributor: {
    (
      _tokenDistributor: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenDistributor: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenDistributor: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenDistributor: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getFeeProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setFeeProviderImpl: {
    (_feeProvider: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _feeProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _feeProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _feeProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolLiquidationManager(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolLiquidationManager: {
    (_manager: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _manager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _manager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _manager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingPoolManager(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  setLendingPoolManager: {
    (
      _lendingPoolManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _lendingPoolManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingPoolManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingPoolManager: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getPriceOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setPriceOracle: {
    (_priceOracle: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _priceOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _priceOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _priceOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getLendingRateOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setLendingRateOracle: {
    (
      _lendingRateOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _lendingRateOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _lendingRateOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lendingRateOracle: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    getLendingPool(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setLendingPoolImpl: {
      (_pool: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _pool: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _pool: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _pool: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolCore(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setLendingPoolCoreImpl: {
      (
        _lendingPoolCore: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _lendingPoolCore: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _lendingPoolCore: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _lendingPoolCore: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolConfigurator(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingPoolConfiguratorImpl: {
      (_configurator: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _configurator: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _configurator: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _configurator: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolDataProvider(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingPoolDataProviderImpl: {
      (_provider: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _provider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _provider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _provider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolParametersProvider(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingPoolParametersProviderImpl: {
      (
        _parametersProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _parametersProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _parametersProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _parametersProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getTokenDistributor(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setTokenDistributor: {
      (
        _tokenDistributor: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenDistributor: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenDistributor: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenDistributor: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getFeeProvider(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setFeeProviderImpl: {
      (_feeProvider: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _feeProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _feeProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _feeProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolLiquidationManager(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingPoolLiquidationManager: {
      (_manager: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _manager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _manager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _manager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingPoolManager(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingPoolManager: {
      (
        _lendingPoolManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _lendingPoolManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _lendingPoolManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _lendingPoolManager: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getPriceOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

    setPriceOracle: {
      (_priceOracle: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _priceOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _priceOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _priceOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getLendingRateOracle(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    setLendingRateOracle: {
      (
        _lendingRateOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _lendingRateOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _lendingRateOracle: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _lendingRateOracle: string,
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
