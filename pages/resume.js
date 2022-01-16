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
              <Section>McDonalds
              <Section as="">2017-2019</Section></Section>     
            </Heading>
        </Section>
        <Section>
            <Paragraph>
               <Section> from the moment I turned 16 and was able to get a work permit from school to the moment I turned 18, I worked at the first window in the drive through alone which entails taking orders, money, and handling any mistakes.</Section>
            </Paragraph>
        </Section>
        <br/>
        <Section variant="section-title">
          <Heading><Section>
            JNC MANAGEMENT 
            <Section>2019-2021</Section></Section>
          </Heading>
          <Paragraph>
             <Section> After graduating high school and turning 18 within the same two weeks, I upgraded jobs to work at a small local retail store to sell, replace, troubleshoot and fix all sorts of SKUs</Section>
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
