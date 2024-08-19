import React, { useState } from "react";
import { MeshSwapContract } from "@meshsdk/contract";
import { BlockfrostProvider, MeshTxBuilder, Asset, UTxO } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

const SwapForm: React.FC = () => {
  const { connected, wallet } = useWallet();

  const [swapFrom, setSwapFrom] = useState<string>("");
  const [quantityFrom, setQuantityFrom] = useState<string>("");
  const [swapTo, setSwapTo] = useState<string>("");
  const [quantityTo, setQuantityTo] = useState<string>("");
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Inicializa el contrato
  const blockchainProvider = new BlockfrostProvider(
    "preprodIYroQUWGpiZxnwpH0Nzlvuo93j88AkIM"
  );
  const meshTxBuilder = new MeshTxBuilder({
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
  });

  const contract = new MeshSwapContract({
    mesh: meshTxBuilder,
    fetcher: blockchainProvider,
    wallet: wallet,
    networkId: 1, // Ajusta esto según el networkId que estés usando
  });

  // Función para iniciar el swap
  const initiateSwap = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!connected || !wallet) {
      console.error("No wallet connected");
      return;
    }

    const assetToProvide: Asset = {
      unit: swapFrom,
      quantity: quantityFrom,
    };

    const assetToReceive: Asset = {
      unit: swapTo,
      quantity: quantityTo,
    };

    try {
      const tx = await contract.initiateSwap(
        [assetToProvide],
        [assetToReceive]
      );
      const signedTx = await wallet.signTx(tx);
      const txHash = await wallet.submitTx(signedTx);
      console.log("Swap initiated, TxHash:", txHash);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error initiating swap:", error.message, error.stack);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  // Función para aceptar el swap
  const acceptSwap = async () => {
    if (!connected || !wallet || !transactionHash) {
      console.error("No wallet connected or no transaction hash available");
      return;
    }

    try {
      const utxo: UTxO | undefined = await contract.getUtxoByTxHash(
        transactionHash
      );

      if (!utxo) {
        throw new Error("UTxO not found for the provided transaction hash.");
      }

      const tx = await contract.acceptSwap(utxo);
      const signedTx = await wallet.signTx(tx);
      const txHashAccepted = await wallet.submitTx(signedTx);
      console.log("Swap accepted, TxHash:", txHashAccepted);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error accepting swap:", error.message, error.stack);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-gray-900 w-full text-white text-center">
        <title>TravelCoin</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <NavBar />
      </div>

      <div className="bg-gray-900 w-full text-white text-center p-8">
        <h1 className="text-4xl font-bold mb-8">Swap Form</h1>
        <form onSubmit={initiateSwap} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-2">
              Swap From (Token ID):
            </label>
            <input
              type="text"
              value={swapFrom}
              onChange={(e) => setSwapFrom(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter token ID to swap from"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-2">
              Quantity From:
            </label>
            <input
              type="number"
              value={quantityFrom}
              onChange={(e) => setQuantityFrom(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter quantity to swap from"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-2">
              Swap To (Token ID):
            </label>
            <input
              type="text"
              value={swapTo}
              onChange={(e) => setSwapTo(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter token ID to swap to"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-sm font-medium mb-2">
              Quantity To:
            </label>
            <input
              type="number"
              value={quantityTo}
              onChange={(e) => setQuantityTo(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter quantity to swap to"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            Initiate Swap
          </button>
        </form>

        {transactionHash && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Accept Swap</h2>
            <button
              onClick={acceptSwap}
              className="w-full p-3 rounded bg-green-600 hover:bg-green-700 text-white font-medium"
            >
              Accept Swap
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SwapForm;