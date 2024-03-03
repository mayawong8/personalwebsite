import Head from "next/head";
import styles from "../styles/Home.module.css"

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
          <h1 className="text-white font-mono text-4xl">Hi, I'm Maya Wong</h1>
      </section>
    </main>
    </div>
  );
}
