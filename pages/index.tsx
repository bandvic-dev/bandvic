import type { NextPage } from 'next'
import Head from "next/head";
import Layout from "../components/layout/Layout"
import Image from 'next/image'
import Link from 'next/link';

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
              <h1 className="card__title">Andrei Balanco</h1>
              <p className="card__subtitle">Front-end Developer</p>
              <p className="card__text">Good experiance in HTML, CSS, SCSS, BEM, Git, jQuery, Javascript, npm, webpack(laravel mix), Pug, Joomla.</p>
              
              <div className="socials-wrapper">
                <ul className="socials">
                  <li className="socials__item">
                    <Link href="https://www.linkedin.com/in/andrei-balanco-251714185/">
                      <a className="socials__link" title="Watch my Linkedin" target="_blank">
                        <Image src="/images/linkedin-icon.svg" width="40px" height="40px" alt="Linkedin" />
                      </a>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link href="https://www.instagram.com/andrei_balanco/">
                      <a className="socials__link" title="Watch my Instagram" target="_blank">
                        <Image src="/images/instagram-icon.svg" width="40px" height="40px" alt="Instagram" />
                      </a>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link href="https://github.com/bandvic-dev">
                      <a className="socials__link" title="Watch my Github" target="_blank">
                        <Image src="/images/github-icon.svg" width="40px" height="40px" alt="Github" />
                      </a>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link href="mailto:bandvic@mail.ru">
                      <a className="socials__link" title="Write me Message" target="_blank">
                        <Image src="/images/mail-icon.svg" width="40px" height="40px" alt="Mail" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
  )
}

export default Home
