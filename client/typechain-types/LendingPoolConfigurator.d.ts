/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LendingPoolConfiguratorContract
  extends Truffle.Contract<LendingPoolConfiguratorInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<LendingPoolConfiguratorInstance>;
}

export interface BorrowingDisabledOnReserve {
  name: "BorrowingDisabledOnReserve";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface BorrowingEnabledOnReserve {
  name: "BorrowingEnabledOnReserve";
  args: {
    _reserve: string;
    _stableRateEnabled: boolean;
    0: string;
    1: boolean;
  };
}

export interface ReserveActivated {
  name: "ReserveActivated";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface ReserveBaseLtvChanged {
  name: "ReserveBaseLtvChanged";
  args: {
    _reserve: string;
    _ltv: BN;
    0: string;
    1: BN;
  };
}

export interface ReserveDeactivated {
  name: "ReserveDeactivated";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface ReserveDecimalsChanged {
  name: "ReserveDecimalsChanged";
  args: {
    _reserve: string;
    _decimals: BN;
    0: string;
    1: BN;
  };
}

export interface ReserveDisabledAsCollateral {
  name: "ReserveDisabledAsCollateral";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface ReserveEnabledAsCollateral {
  name: "ReserveEnabledAsCollateral";
  args: {
    _reserve: string;
    _ltv: BN;
    _liquidationThreshold: BN;
    _liquidationBonus: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

export interface ReserveFreezed {
  name: "ReserveFreezed";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface ReserveInitialized {
  name: "ReserveInitialized";
  args: {
    _reserve: string;
    _aToken: string;
    _interestRateStrategyAddress: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface ReserveInterestRateStrategyChanged {
  name: "ReserveInterestRateStrategyChanged";
  args: {
    _reserve: string;
    _strategy: string;
    0: string;
    1: string;
  };
}

export interface ReserveLiquidationBonusChanged {
  name: "ReserveLiquidationBonusChanged";
  args: {
    _reserve: string;
    _bonus: BN;
    0: string;
    1: BN;
  };
}

export interface ReserveLiquidationThresholdChanged {
  name: "ReserveLiquidationThresholdChanged";
  args: {
    _reserve: string;
    _threshold: BN;
    0: string;
    1: BN;
  };
}

export interface ReserveRemoved {
  name: "ReserveRemoved";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface ReserveUnfreezed {
  name: "ReserveUnfreezed";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface StableRateDisabledOnReserve {
  name: "StableRateDisabledOnReserve";
  args: {
    _reserve: string;
    0: string;
  };
}

export interface StableRateEnabledOnReserve {
  name: "StableRateEnabledOnReserve";
  args: {
    _reserve: string;
    0: string;
  };
}

type AllEvents =
  | BorrowingDisabledOnReserve
  | BorrowingEnabledOnReserve
  | ReserveActivated
  | ReserveBaseLtvChanged
  | ReserveDeactivated
  | ReserveDecimalsChanged
  | ReserveDisabledAsCollateral
  | ReserveEnabledAsCollateral
  | ReserveFreezed
  | ReserveInitialized
  | ReserveInterestRateStrategyChanged
  | ReserveLiquidationBonusChanged
  | ReserveLiquidationThresholdChanged
  | ReserveRemoved
  | ReserveUnfreezed
  | StableRateDisabledOnReserve
  | StableRateEnabledOnReserve;

export interface LendingPoolConfiguratorInstance
  extends Truffle.ContractInstance {
  CONFIGURATOR_REVISION(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  poolAddressesProvider(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  initialize: {
    (
      _poolAddressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _poolAddressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _poolAddressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _poolAddressesProvider: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * initializes a reserve
   * @param _interestRateStrategyAddress the address of the interest rate strategy contract for this reserve*
   * @param _reserve the address of the reserve to be initialized
   * @param _underlyingAssetDecimals the decimals of the reserve underlying asset
   */
  initReserve: {
    (
      _reserve: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * initializes a reserve using aTokenData provided externally (useful if the underlying ERC20 contract doesn't expose name or decimals)
   * @param _aTokenName the name of the aToken contract
   * @param _aTokenSymbol the symbol of the aToken contract
   * @param _interestRateStrategyAddress the address of the interest rate strategy contract for this reserve*
   * @param _reserve the address of the reserve to be initialized
   * @param _underlyingAssetDecimals the decimals of the reserve underlying asset
   */
  initReserveWithData: {
    (
      _reserve: string,
      _aTokenName: string,
      _aTokenSymbol: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _aTokenName: string,
      _aTokenSymbol: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _aTokenName: string,
      _aTokenSymbol: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _aTokenName: string,
      _aTokenSymbol: string,
      _underlyingAssetDecimals: number | BN | string,
      _interestRateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * removes the last added reserve in the list of the reserves
   * @param _reserveToRemove the address of the reserve*
   */
  removeLastAddedReserve: {
    (_reserveToRemove: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserveToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserveToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserveToRemove: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * enables borrowing on a reserve
   * @param _reserve the address of the reserve
   * @param _stableBorrowRateEnabled true if stable borrow rate needs to be enabled by default on this reserve*
   */
  enableBorrowingOnReserve: {
    (
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _stableBorrowRateEnabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * disables borrowing on a reserve
   * @param _reserve the address of the reserve*
   */
  disableBorrowingOnReserve: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * enables a reserve to be used as collateral
   * @param _baseLTVasCollateral the loan to value of the asset when used as collateral
   * @param _liquidationBonus the bonus liquidators receive to liquidate this asset*
   * @param _liquidationThreshold the threshold at which loans using this asset as collateral will be considered undercollateralized
   * @param _reserve the address of the reserve
   */
  enableReserveAsCollateral: {
    (
      _reserve: string,
      _baseLTVasCollateral: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _baseLTVasCollateral: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _baseLTVasCollateral: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _baseLTVasCollateral: number | BN | string,
      _liquidationThreshold: number | BN | string,
      _liquidationBonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * disables a reserve as collateral
   * @param _reserve the address of the reserve*
   */
  disableReserveAsCollateral: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * enable stable rate borrowing on a reserve
   * @param _reserve the address of the reserve*
   */
  enableReserveStableBorrowRate: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * disable stable rate borrowing on a reserve
   * @param _reserve the address of the reserve*
   */
  disableReserveStableBorrowRate: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * activates a reserve
   * @param _reserve the address of the reserve*
   */
  activateReserve: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * deactivates a reserve
   * @param _reserve the address of the reserve*
   */
  deactivateReserve: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * freezes a reserve. A freezed reserve doesn't accept any new deposit, borrow or rate swap, but can accept repayments, liquidations, rate rebalances and redeems
   * @param _reserve the address of the reserve*
   */
  freezeReserve: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * unfreezes a reserve
   * @param _reserve the address of the reserve*
   */
  unfreezeReserve: {
    (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * emitted when a reserve loan to value is updated
   * @param _ltv the new value for the loan to value*
   * @param _reserve the address of the reserve
   */
  setReserveBaseLTVasCollateral: {
    (
      _reserve: string,
      _ltv: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _ltv: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _ltv: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _ltv: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * updates the liquidation threshold of a reserve.
   * @param _reserve the address of the reserve
   * @param _threshold the new value for the liquidation threshold*
   */
  setReserveLiquidationThreshold: {
    (
      _reserve: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * updates the liquidation bonus of a reserve
   * @param _bonus the new value for the liquidation bonus*
   * @param _reserve the address of the reserve
   */
  setReserveLiquidationBonus: {
    (
      _reserve: string,
      _bonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _bonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _bonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _bonus: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * updates the reserve decimals
   * @param _decimals the new number of decimals*
   * @param _reserve the address of the reserve
   */
  setReserveDecimals: {
    (
      _reserve: string,
      _decimals: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _decimals: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _decimals: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _decimals: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * sets the interest rate strategy of a reserve
   * @param _rateStrategyAddress the new address of the interest strategy contract*
   * @param _reserve the address of the reserve
   */
  setReserveInterestRateStrategyAddress: {
    (
      _reserve: string,
      _rateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _rateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _rateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _rateStrategyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * refreshes the lending pool core configuration to update the cached address*
   */
  refreshLendingPoolCoreConfiguration: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    CONFIGURATOR_REVISION(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    poolAddressesProvider(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    initialize: {
      (
        _poolAddressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _poolAddressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _poolAddressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _poolAddressesProvider: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * initializes a reserve
     * @param _interestRateStrategyAddress the address of the interest rate strategy contract for this reserve*
     * @param _reserve the address of the reserve to be initialized
     * @param _underlyingAssetDecimals the decimals of the reserve underlying asset
     */
    initReserve: {
      (
        _reserve: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * initializes a reserve using aTokenData provided externally (useful if the underlying ERC20 contract doesn't expose name or decimals)
     * @param _aTokenName the name of the aToken contract
     * @param _aTokenSymbol the symbol of the aToken contract
     * @param _interestRateStrategyAddress the address of the interest rate strategy contract for this reserve*
     * @param _reserve the address of the reserve to be initialized
     * @param _underlyingAssetDecimals the decimals of the reserve underlying asset
     */
    initReserveWithData: {
      (
        _reserve: string,
        _aTokenName: string,
        _aTokenSymbol: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _aTokenName: string,
        _aTokenSymbol: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _aTokenName: string,
        _aTokenSymbol: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _aTokenName: string,
        _aTokenSymbol: string,
        _underlyingAssetDecimals: number | BN | string,
        _interestRateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * removes the last added reserve in the list of the reserves
     * @param _reserveToRemove the address of the reserve*
     */
    removeLastAddedReserve: {
      (
        _reserveToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserveToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserveToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserveToRemove: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * enables borrowing on a reserve
     * @param _reserve the address of the reserve
     * @param _stableBorrowRateEnabled true if stable borrow rate needs to be enabled by default on this reserve*
     */
    enableBorrowingOnReserve: {
      (
        _reserve: string,
        _stableBorrowRateEnabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _stableBorrowRateEnabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _stableBorrowRateEnabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _stableBorrowRateEnabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * disables borrowing on a reserve
     * @param _reserve the address of the reserve*
     */
    disableBorrowingOnReserve: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * enables a reserve to be used as collateral
     * @param _baseLTVasCollateral the loan to value of the asset when used as collateral
     * @param _liquidationBonus the bonus liquidators receive to liquidate this asset*
     * @param _liquidationThreshold the threshold at which loans using this asset as collateral will be considered undercollateralized
     * @param _reserve the address of the reserve
     */
    enableReserveAsCollateral: {
      (
        _reserve: string,
        _baseLTVasCollateral: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _baseLTVasCollateral: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _baseLTVasCollateral: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _baseLTVasCollateral: number | BN | string,
        _liquidationThreshold: number | BN | string,
        _liquidationBonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * disables a reserve as collateral
     * @param _reserve the address of the reserve*
     */
    disableReserveAsCollateral: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * enable stable rate borrowing on a reserve
     * @param _reserve the address of the reserve*
     */
    enableReserveStableBorrowRate: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * disable stable rate borrowing on a reserve
     * @param _reserve the address of the reserve*
     */
    disableReserveStableBorrowRate: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * activates a reserve
     * @param _reserve the address of the reserve*
     */
    activateReserve: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * deactivates a reserve
     * @param _reserve the address of the reserve*
     */
    deactivateReserve: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * freezes a reserve. A freezed reserve doesn't accept any new deposit, borrow or rate swap, but can accept repayments, liquidations, rate rebalances and redeems
     * @param _reserve the address of the reserve*
     */
    freezeReserve: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * unfreezes a reserve
     * @param _reserve the address of the reserve*
     */
    unfreezeReserve: {
      (_reserve: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * emitted when a reserve loan to value is updated
     * @param _ltv the new value for the loan to value*
     * @param _reserve the address of the reserve
     */
    setReserveBaseLTVasCollateral: {
      (
        _reserve: string,
        _ltv: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _ltv: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _ltv: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _ltv: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * updates the liquidation threshold of a reserve.
     * @param _reserve the address of the reserve
     * @param _threshold the new value for the liquidation threshold*
     */
    setReserveLiquidationThreshold: {
      (
        _reserve: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * updates the liquidation bonus of a reserve
     * @param _bonus the new value for the liquidation bonus*
     * @param _reserve the address of the reserve
     */
    setReserveLiquidationBonus: {
      (
        _reserve: string,
        _bonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _bonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _bonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _bonus: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * updates the reserve decimals
     * @param _decimals the new number of decimals*
     * @param _reserve the address of the reserve
     */
    setReserveDecimals: {
      (
        _reserve: string,
        _decimals: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _decimals: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _decimals: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _decimals: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * sets the interest rate strategy of a reserve
     * @param _rateStrategyAddress the new address of the interest strategy contract*
     * @param _reserve the address of the reserve
     */
    setReserveInterestRateStrategyAddress: {
      (
        _reserve: string,
        _rateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _rateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _rateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _rateStrategyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * refreshes the lending pool core configuration to update the cached address*
     */
    refreshLendingPoolCoreConfiguration: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
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
