import { Box, Container, Heading, Image, Button, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
const Page = () => {
  return (
    <Container>
      <Box>
        <br/>
        <br/>
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading variant="page-title">
              Briggs Bastian 
          </Heading>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{ md: 6 }} align="center">
          <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            maxWidth="100px" 
            display="inline-block" 
            borderRadius="full" 
            src={'profile.png'} 
            alt="Profile Image" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title"> 
          About me
        </Heading>
        <Paragraph>
          Currently working on the <Link href="/projects/PICO_Deck">PICO_Deck</Link> project, a Raspberry PI PICO based Micro keyboard that is incredibly easy to configure, incluing an intuitive GUI that will work on all operating systems. This is currenly in a very early stage in its development 
        </Paragraph>
      </Section>
      <Section>
      <NextLink href="./projects" align="left">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              See the rest of my projects!
            </Button>
          </NextLink>
      </Section>
      <Section delay={0.2}>
          I am currently looking for employment in the IT and Cybersecurity space to get my career started, while I also study for the CompTia Security+ and the Splunk Fundementals certifications. Please consider looking at my <Link href="./resume">Resume</Link>
      </Section>
      <Section>
      <Box my={4} pd={3}>
      
          <NextLink href="./contact_me" align="right">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              Send me an email!
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page 

