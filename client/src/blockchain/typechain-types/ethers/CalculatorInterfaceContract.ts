/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { CalculatorInterface } from "./CalculatorInterface";

export class CalculatorInterfaceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CalculatorInterface {
    return new Contract(address, _abi, signerOrProvider) as CalculatorInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numerator",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_streak",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "daysStaked",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      }
    ],
    name: "calculateNumTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "numerator",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256"
      }
    ],
    name: "negativeDayCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stakerLastTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stakerStartTimestamp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      }
    ],
    name: "iterativelyCalculateOwedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];