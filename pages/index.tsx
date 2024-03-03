import Head from "next/head";
import styles from "../styles/Home.module.css"
import React, {useState, useEffect} from 'react'


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
          <h1 className="typewriter">Hi, I'm Maya Wong</h1>
        </div>
        
      </section>
    </main>
    </div>
  );
}
