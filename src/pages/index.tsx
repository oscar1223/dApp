import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Inter } from "next/font/google";
import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { BrowserWallet } from '@meshsdk/core';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { useEffect } from "react";
import "@meshsdk/react/styles.css";
import React from 'react';
import plane_img from '../images/plane.png';
import moon from '../images/moon.png'
import dev1 from '../images/fotoperfil1.jpeg'
import dev2 from '../images/fotoperfil2.jpeg'
import dev3 from '../images/foto de perfil3.jpg'
import dev4 from '../images/fotodeperfil4.jpeg'


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  
  useEffect(() => {
    console.log(BrowserWallet.getInstalledWallets())
  }, []);

  return (
    <div className="bg-gray-900 w-full text-white text-center">
      <Head >
        <title>TravelCoin</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
      </Head>
      <NavBar/>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `} >
        
      <section className="text-black body-font lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>We are making </span>
            <br className="hidden lg:block"></br>
            Traveling easy
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            TravelCoin is a {" "}
            <a href="https://nextjs.org/" className="underline">
            Cardano Token
            </a>{" "}
            to reinvent the worldwide traveling.
          </p>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          className="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="Plane"
          src={plane_img.src}
        ></img>
      </div>
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={3940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Holders</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740000} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">$ Market Cap</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  <CountUp end={81505} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Transactions</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={moon.src}
            ></img>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p className="leading-relaxed text-lg">
                  The best way to travel fast all arround the world.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Swap
                </h2>
                <p className="leading-relaxed text-lg">
                  Swap between any Cardano Native Token.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Stake
                </h2>
                <p className="leading-relaxed text-lg">
                  Stake with best APY 10%
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Reliable
                </h2>
                <p className="leading-relaxed text-lg">
                  The most trusted travel currency on the entire blockchain
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Universal
                </h2>
                <p className="leading-relaxed text-lg">
                  You can use TCOIN to travel anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ROADMAP */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
                Roadmap
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here is our future plans
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                
                  <div className="h-full flex flex-col items-center text-center">
                    <ol className="items-center sm:flex">
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pre-Sale</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22/08/2024</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Our three-round pre-sale ahead of our initial coin offering.</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Native Token creation</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">15/09/2024</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">TCOIN, our utility token, is officially born on the Cardano blockchain.</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Initial Coin Offering</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">30/12/2024</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Investment in our token begins with our highly successful ICO.</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exchanges submissions</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14/02/2025</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Applications to list KUBE on top tier exchanges.</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pe-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Token integration on platforms</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">30/03/2025</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Use TCOIN to buy real-world products from our ecommerce MysteryTravel</p>
                            </div>
                        </li>
                    </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Our Team
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here is our company
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={dev1.src}
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Oscar
                      </h2>
                      <h3 className="text-gray-500 mb-3">Blockchain Developer</h3>
                      <p className="mb-4">
                        Oscar is the head of our blokchain team providing amazing
                        features.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={dev2.src}
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Jose Luis
                      </h2>
                      <h3 className="text-gray-500 mb-3">Back-end Developer</h3>
                      <p className="mb-4">
                        Jose Luis is lead of our back-end team providing amazing
                        APIs.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={dev3.src}
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Alex
                      </h2>
                      <h3 className="text-gray-500 mb-3">Fron-end Developer</h3>
                      <p className="mb-4">
                        Alex is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={dev4.src}
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Juliano
                      </h2>
                      <h3 className="text-gray-500 mb-3">Marketing</h3>
                      <p className="mb-4">
                        Juliano is part of our marketing team providing amazing
                        ideas.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      </main>
      <Footer/>
    </div>
  );
}
