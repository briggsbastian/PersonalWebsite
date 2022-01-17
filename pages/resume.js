import {Box, Container, Heading, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
const Resume = () => {
  return (
    <Layout title="Resume">
    <Container>
      <Section>
      <Box>
          <Heading p={50} align="center">
            Work Experience
          </Heading>
          <br/>
      </Box>
      </Section>
      <Box>
        <Section>
            <Heading>
              <Section>JNC MANAGEMENT
              <Section as="">2019-2021</Section></Section>     
            </Heading>
        </Section>
        <Section>
            <Paragraph>
              <Section>After graduating high school and turning 18 within two weeks, I upgraded from taking orders behind the counter at McDonalds to upselling and marketing the items sold there to maximize profits</Section>
            </Paragraph>
        </Section>
        <br/>
        <Section variant="section-title">
          <Heading><Section>
            McDonalds
            <Section>2017-2019</Section></Section>
          </Heading>
          <Paragraph>
            <Section>The moment I turned 16 I looked for a job local to me, and got a job as a crew member at the busiest locatin in Simi Valley, taking orders, working the register, and being the first to work on any issues the customers might face with their food</Section>
          </Paragraph>
        </Section>
      </Box>
      <br/>
      <Box>
        <Section variant="section-title">
          <Heading p={50}as="h3" align="center">
            <Section>Education</Section>
          </Heading>
          <Heading>
      
              <Section>UCSD Extension Security+ Bootcamp
              <Section>March 2021 - September 2021</Section></Section>
          </Heading>
          <Paragraph>
             <Section>Although I learned most of my programming outside of school, here I learned how to use GNU/Linux, which is now my daily driver operating system. My command line expirence with Bash like shells (bash, zsh, fish), CMD and Powershell.</Section> 
          </Paragraph>
        </Section>
      </Box>
      <br/>
      <NextLink href="https://docs.google.com/document/d/10bbcA_la2hS5NrO2IxapIVJYQ4VewbQqiuNaYQGHQo8/edit?usp=sharing">
      <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
        See my Resume in a DOC format
      </Button>
      </NextLink>
    </Container>
    </Layout>
  )
}

export default Resume
