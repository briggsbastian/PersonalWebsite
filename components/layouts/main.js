import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from "../navbar.js"

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
    <Head>
      <title>Homepage - Briggs Bastian</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>

    <Navbar />

    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
    </Box>
  )
}

export default Main
