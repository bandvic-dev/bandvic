import type { NextPage } from 'next'
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Home</title>
      <meta name="description" content="Personal webpage about my skill performance" />
    </Head>
    <Layout>
      <div className="container">
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, explicabo aliquid? Laboriosam, eaque suscipit molestias voluptas optio neque, explicabo error dolore laudantium atque labore a facilis nulla quod temporibus accusamus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, explicabo aliquid? Laboriosam, eaque suscipit molestias voluptas optio neque, explicabo error dolore laudantium atque labore a facilis nulla quod temporibus accusamus?</p>
      </div>
    </Layout>
  </>
  )
}

export default Home
