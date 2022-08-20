/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children: JSX.Element,
  };

export function Layout({ children }: Props) {
  
    return (<>
        <Head>
            <link rel="icon" href="favicon.ico" />
            <meta property="og:locale" content="en_US" />
		    <meta property="og:site_name" content="bandvic.ru" />
		    <meta property="og:type" content="website" />
		    <meta property="og:url" content="https://bandvic.ru/" />
		    <meta property="og:title" content="Andrei B" />
		    <meta property="og:description" content="Front-End Developer" />
		    <meta property="og:image" content="./images/android-chrome-512x512.png" />
		    <meta name="twitter:card" content="summary_large_image" />
		    <meta name="twitter:site" content="@bandvic" />
		    <meta name="twitter:creator" content="@bandvic" />
		    <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png" />
		    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
		    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png" />
		    <link rel="mask-icon" href="./images/safari-pinned-tab.svg" color="#ea4335" />
            <link rel="manifest" href="./site.webmanifest" />
        </Head>
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-K85V3WXWDV"></Script>
        <Script dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}gtag('js', 
                new Date());gtag('config', 'G-K85V3WXWDV');`
        }}></Script> */}
        
        <Header />
        <main>{children}</main>
        <Footer />
    </>)
}
  
export default Layout