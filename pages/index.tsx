import Head from "next/head";
import styles from "../styles/Home.module.css"
import React, {useState, useEffect} from 'react'
import jupiter from '../public/jupiter.png'
import Image from "next/image"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Maya Wong</title>
        <meta name="description" content="This is Maya Wong's personal website."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <main>
      <section className="background-section-1 flex justify-center items-center h-screen">
        <div>
          <h1 className="typewriter font-mono">Hi, I'm Maya Wong</h1>
        </div>
      </section>
      <section className="background-section-2 h-screen">
        <div className="p-16">
          <p className="font-mono text-white text-4xl p-20">I graduated in Computer Science Honours with a concentration in Cybersecurity and a double minor in Business and Earth Sciences. </p>
          <div className="flex flex-row">
            <Image src={jupiter} alt="avatar" className="rotate-on-hover h-90 w-90" />
            <p className="font-mono text-white text-4xl p-20">I have interests in Cybersecurity, App/Web Development, and Sports. </p>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
