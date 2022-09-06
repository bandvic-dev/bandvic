import type { NextPage } from 'next'
import Head from "next/head";
import Layout from "../components/layout/Layout"
import Image from 'next/image'
import Socials from '../components/modules/Socials'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Home</title>
      <meta name="description" content="Personal webpage about my skill performance" />
    </Head>
    <Layout>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">
            <div className="card__image">
              <Image src="/images/avatar-250x250.jpg" width="300" height="300" alt="Avatar image"/>
            </div>
            <div className="card__content">
              <h1 className="card__title h1-title">Andrei Balanco</h1>
              <p className="card__subtitle h3-title">Front-end Developer</p>
              <p className="card__text">Good experience in HTML, CSS, SCSS, BEM, Git, Bootstrap, jQuery, Javascript, npm, Pug, Joomla.</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
  )
}

export default Home
