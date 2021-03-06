/* eslint-disable */
import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from "../navbar.js"

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
    <Head>
      <title>Homepage - Briggs Bastian</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        
    

    <Navbar />

    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
    </Box>
  )
}

export default Main
/* eslint-enable */
