import NextLink from 'next/link'
import {Box, Heading, Text, Container, Button} from '@chakra-ui/react'

const whomegalul = () => {
  return(
    <Container>
      <Heading>404</Heading>
        <br/>
        <Text>yea, don&apos;t really know what you&apos;re going for by being here but, here&apos;s a button to get you back on track</Text>
      
      <Box my={6} align='center'>
        <NextLink href="/">
          <Button colorScheme="cyan">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default whomegalul
