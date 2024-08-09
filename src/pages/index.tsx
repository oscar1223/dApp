import { Inter } from "next/font/google";
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { BrowserWallet } from '@meshsdk/core';
import NavBar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from "react";
import "@meshsdk/react/styles.css";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  
  useEffect(() => {
    console.log(BrowserWallet.getInstalledWallets())
  }, []);

  return (
    <div className="bg-gray-900 w-full text-white text-center">
      <Head>
        <title>CactusSwap</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
      </Head>
      <NavBar/>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `} >
        
        <h1 className="text-6xl font-thin mb-20">
          <a href="https://meshjs.dev/" className="text-sky-600">Mesh</a> Next.js
        </h1>

        <div className="m-20">
          <CardanoWallet />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-around ">
          <a href="https://meshjs.dev/apis" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5">
            <h2 className="text-2xl font-bold mb-2">Documentation</h2>
            <p className="text-gray-400">
              Our documentation provide live demos and code samples; great
              educational tool for learning how Cardano works.
            </p>
          </a>

          <a href="https://meshjs.dev/guides" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96  p-5 m-5">
            <h2 className="text-2xl font-bold mb-2">Guides</h2>
            <p className="text-gray-400">
              Whether you are launching a new NFT project or ecommerce store,
              these guides will help you get started.
            </p>
          </a>

          <a href="https://meshjs.dev/react" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5 md:mx-auto lg:mx-5 md:col-span-2 lg:col-span-1 ">
            <h2 className="text-2xl font-bold mb-2">React components</h2>
            <p className="text-gray-400">
              Useful React UI components and hooks, seamlessly integrate them
              into your app, and bring the user interface to life.
            </p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
