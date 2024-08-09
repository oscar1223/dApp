import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from './components/navbar';
import Footer from './components/footer';
import "@meshsdk/react/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Swap(){
    return(
        <div className="bg-gray-900 w-full text-white text-center">
            <Head>
                <title>CactusSwap</title>
                <meta name="description" content="A Cardano dApp powered my Mesh" />
            </Head>
            <NavBar/>
            <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `} >
            
                <h1 className="text-6xl font-thin mb-20">
                    <a href="https://meshjs.dev/" className="text-sky-600">Swap page</a>
                </h1>

            </main>
            <Footer/>
      </div>
    );
}