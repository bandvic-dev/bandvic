import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Socials from "../components/modules/Socials";

export function Resume(props: NextPage) {
  return (
    <>
      <Head>
        <title>Andrei Balanco | Resume Page</title>
        <meta name="description" content="My actual CV" />
      </Head>
      <Layout>
        <div className="container">
          <div className="resume-wrapper content-wrapper">
            <div className="resume-row">
              <div className="resume-sidebar">
                <div className="resume-avatar">
                  <div className="resume-avatar__image">
                    <Image
                      src="/images/avatar-250x250.jpg"
                      width="220px"
                      height="220px"
                      alt="Resume Avatar"
                    />
                  </div>
                  <div className="resume-avatar__info">
                    <h1 className="resume-avatar__name">Andrei Balanco</h1>
                    <p className="resume-avatar__position">
                      Front-end Developer
                    </p>
                  </div>
                </div>
                <div className="resume-contact">
                  <div className="resume-contact__item">
                    <strong>Phone:</strong> <Link href="tel:37379907447"><a title="Call me phone or Viber">+37379907447</a></Link>
                  </div>
                  <div className="resume-contact__item">
                    <strong>Email:</strong> <Link href="mailto:working.web31@gmail.com"><a title="Write me message">working.web31@gmail.com</a></Link>
                  </div>
                  <div className="resume-contact__item">
                    <strong>Experience in IT:</strong> more 10 years.
                  </div>
                </div>
                <div className="resume-aditional-info">
                  <div className="resume-aditional-info__item">
                    <h4 className="h4-title">Good Skills</h4>
                    <p>
                      HTML, CSS, SCSS, BEM, Git, Bootstrap, jQuery, Javascript, npm, Pug, Blade, Joomla, Wordpress.
                    </p>
                  </div>
                  <div className="resume-aditional-info__item">
                    <h4 className="h4-title">Basic skills</h4>
                    <p>
                      Gulp, Webpack, Node.js, Express.js, React, Next.js, Prisma,
                      Stripe.js, Photoshop, XD, Figma, 
                      Trello, Jira.
                    </p>
                  </div>
                  <div className="resume-aditional-info__item">
                    <h4 className="h4-title">Courses</h4>
                    <p>
                      <Link href="https://www.coursera.org/account/accomplishments/certificate/F9LXT7GBCSNK"><a target="_blank" title="Show sertificate">Bootstrap</a></Link>,&nbsp;
                      <Link href="https://www.coursera.org/account/accomplishments/certificate/YFEZHHCMXXUW"><a target="_blank" title="Show sertificate">React</a></Link>,&nbsp; 
                      <Link href="https://drive.google.com/file/d/1iR88_XhaOIhwA1QhexEtgA0ypQkYVDyh/view?usp=share_link"><a target="_blank" title="Show sertificate">English A2</a></Link>.
                    </p>
                  </div>
                  <Socials />
                </div>
              </div>
              <div className="resume-content content">
                <h2>The True Resume</h2>
                <p>I started my IT career as a freelancer without any IT degrees.</p>
                <h4>Involved in tasks</h4>
                <p>Creation of emails, landing pages and multi-page sites by layouts of XD. Made guideline pages of site elements. Page speed loading optimization on the front. Writing custom small reusable javascript scripts.</p>
                <p>Work with forms (customization, validation). Participated in the creation of the application “buying gift discount cards”, where I did the implementation of Stripe.js on the part of front.</p>
                <p>I made a more complex page with a user search directory with ajax requests to the server. Understand how to request data via rest api. Did some work with GoogleMaps.</p>
                <p>I worked quite a bit with Laravel (view routing, components, controllers…) I have experience with the Blade templating engine in Laravel. Self-creation of the structure and support of the front-end part of the project based on laravel, scss, jquery.</p>
                <p>Created a tool on node.js + express.js + Pug, which is used within the team, to view and quickly generate emails of the same type divided into groups with the ability to view and download. From the last and interesting tasks I did it on node.js, I connected the Pug template engine with the MYSQL database through Prisma.
                </p>
                <h4>Languages</h4>
                <p>
                  <strong>English:</strong> I can read and understand documentation and articles. Spoken language at a low level due to insufficient experience. Recently received A2 <Link href="https://drive.google.com/file/d/1iR88_XhaOIhwA1QhexEtgA0ypQkYVDyh/view?usp=share_link"><a target="_blank" title="Link to my sertificate">certificate</a></Link>. I continue to study English on my own.
                </p>
                <p><strong>Romanian:</strong> Elimentary knowledge. I understand Romanian, I can write and read.</p>
                <p><strong>Russian:</strong> Native language. I can speak, read, write and etc.</p>
                <h2 className="h4-title">Books</h2>
                <p>I`ve read books: Visual CSS - Greg Sidelnikov, Programmer Fanatic - Chad Fowler, Javascript for Professionals - John Resig, Russ Ferguson, John Paxton.</p>
                <h2 className="h4-title">About me</h2>
                <p>
                  I’m married, have a child, I’m a decent guy who, before joining IT, managed to work as a tractor driver (2 years old), a laborer at a construction site, a thermal finisher in a sewing shop (3 years old), even a security guard (almost 2 years old), a freelancer (about 4 years developing tourist sites on joomla).
                </p>
                <p>Programming was both a hobby and a small income (since 2008). I started doing real programming in 2017 in an IT company as a front-end developer, (5 years) then gradually I got to know all these technologies. At the moment, I have grown to middle by the standards of the company where I worked. It was difficult at first, but I overcame the difficulties, because I really love my job.
                </p>
                <p>I’m looking for an interesting remote job with a flexible schedule. I want to work and travel. I want to rise as frontend developer particular with React and everything related to it and may be full stack developer in feature.
                </p>
                <p>I love to ride a bike. I love music, I <Link href="https://www.tiktok.com/@andrei_balanco"><a target="_blank" title="My tiktok channel">play an instrument</a></Link> I like to enjoy nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Resume;
