import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from './components/navbar';
import Footer from './components/footer';
import "@meshsdk/react/styles.css";
import { MeshSwapContract } from "@meshsdk/contract";
import { BlockfrostProvider, MeshTxBuilder, Asset } from "@meshsdk/core";
import { useWallet } from '@meshsdk/react';
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Swap(){
    const [swapFrom, setSwapFrom] = useState('');
    const [quantityFrom, setQuantityFrom] = useState('');
    const [swapTo, setSwapTo] = useState('');
    const [quantityTo, setQuantityTo] = useState('');

    console.log(swapFrom);
    console.log(quantityFrom);
    console.log(swapTo);
    console.log(quantityTo);
    
    const blockchainProvider = new BlockfrostProvider('preprodbHX4xYpLqS3qeKfrApthyHCMIgH0pvbb');
    const { connected, wallet } = useWallet();

    console.log(connected);
    console.log("wallet: "+wallet);

    const meshTxBuilder = new MeshTxBuilder({
        fetcher: blockchainProvider,
        submitter: blockchainProvider,
    });

    const contract = new MeshSwapContract({
    mesh: meshTxBuilder,
    fetcher: blockchainProvider,
    wallet: wallet,
    networkId: 0,
    });

    const submitSwap = async () => {
        const assetToProvide: Asset = {
            unit: swapFrom,
            quantity: quantityFrom,
            };
            
        const assetToReceive: Asset = {
        unit: swapTo,
        quantity: quantityTo,
        };

        const tx1 = await contract.initiateSwap([assetToProvide], [assetToReceive]);
        const signedTx1 = await wallet.signTx(tx1);
        const txHash1 = await wallet.submitTx(signedTx1);

        const utxo1 = await contract.getUtxoByTxHash(txHash1);

        if (utxo1) {
            const tx2 = await contract.acceptSwap(utxo1);
            const signedTx2 = await wallet.signTx(tx2);
            const txHash2 = await wallet.submitTx(signedTx2);
            console.log(txHash2)
        } else {
            // Manejar el caso en que utxo1 es undefined
            console.error("UTxO no encontrado. No se puede continuar con la transacción.");
        }

        
    }

    return(
        <div className="bg-gray-900 w-full text-white text-center">
            <Head>
                <title>TravelCoin</title>
                <meta name="description" content="A Cardano dApp powered my Mesh" />
            </Head>
            <NavBar/>
            <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `} >
            <h1 className="text-6xl font-thin mb-20">
                <a href="https://meshjs.dev/" className="text-sky-600">Swap</a>
            </h1>
            <section className="text-black body-font lg:pt-20">
            <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3 ">
                <section className="text-gray-600 body-font ">
                <form action={submitSwap} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Swap from:</label>
                        <input type="text" onChange={(e) => {setSwapFrom(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Token id" required />
                    </div>
                    <div className="mb-5">
                        <input type="text" onChange={(e) => {setQuantityFrom(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Qauntity" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Swap to:</label>
                        <input type="text" onChange={(e) => {setSwapTo(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Token id" required />
                    </div>
                    <div className="mb-5">
                        <input type="text" onChange={(e) => {setQuantityTo(e.target.value)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Qauntity" required />
                    </div>
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Swap</button>
                </form>
                </section>
                </div>
            </section>
            </main>
            <Footer/>
      </div>
    );
}
