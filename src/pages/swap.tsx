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
            <section className="text-black body-font lg:pt-20">
            <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
                <section className="text-gray-600 body-font">  
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">SWAP</h5>
                            <div>
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9-10v.4A3.6 3.6 0 0 1 8.4 9H6.61A3.6 3.6 0 0 0 3 12.605M14.458 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>Swap from<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg></button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ADA</a>
                                        </li>
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">KUBE</a>
                                        </li>
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">WMT</a>
                                        </li>
                                    </ul>
                                </div>  
                            </div>
                            <div>
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm9-10v.4A3.6 3.6 0 0 1 8.4 9H6.61A3.6 3.6 0 0 0 3 12.605M14.458 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>Swap to<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg></button>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ADA</a>
                                        </li>
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">KUBE</a>
                                        </li>
                                        <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">WMT</a>
                                        </li>
                                    </ul>
                                </div>  
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Swap</button>
                        </form>
                    </div>
                   
                </section>
            </div>
            </section>
            </main>
            <Footer/>
      </div>
    );
}
