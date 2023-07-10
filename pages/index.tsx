import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "/styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Smart Contract Lottery</title> {/* Title of the browser page */}
              <meta name="description" content="Our Smart Contract Lottery" />{" "}
              {/* Something that is read by webscrapers */}
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* header / connect button / nav bar */}
          <Header />
          <LotteryEntrance></LotteryEntrance>
      </div>
  )
}
