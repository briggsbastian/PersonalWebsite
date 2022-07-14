import {Box, Container, Heading, Button, Link, ListItem, UnorderedList} from '@chakra-ui/react'
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

      <Section variant="section-title">
        <Box>
            <Heading>
              <Section>Sprout Mortgage - Help Desk technician
              <Section as="h4"></Section>FEB 2022 - JULY 2022</Section>
            </Heading>
            <Section>
              <Paragraph>
                <Section>Working as a helpdesk support technician, did software and registry troubleshooting for Windows 10 and 11, for programs such as Encompass, Office, Adobe. Provisioned licenses through in our Microsoft Cloud environment. Handled MFA accounts through Okta and used Okta workflows to automate tasks. I handled email security using KnowBe4 PhishER when users reported suspcious emails, and filtered out malicious and spam emails using Barracuda.</Section>
              </Paragraph>
            </Section>
        </Box>
      </Section>
      <br/>
      <Section variant="section-title">
        <Box>
        <Heading>
          <Section>JNC Management<Section>
          </Section>JUNE 2019 - MARCH 2021</Section>
        </Heading>
          <Section>
            <Paragraph>
              JNC is a company that has small shops all around the country, mostly in California. This was a small box retail store that heavily relied on upselling and customer satisfaction to rely on them coming back.
            </Paragraph>
          </Section>
        </Box>
      </Section>
      <br/>
      <Section variant="sectinon-title">
        <Box>
          <Heading>
            <Section>McDonalds<Section>
            </Section>SEPT 2017 - JUNE 2019</Section>
          </Heading>
          <Section>
            <Paragraph>I worked in taking orders in the drive-thru, being the first one to take orders, cash, and any customer support complaints that any customer may have had to make sure that they get solved.</Paragraph>
          </Section>
        </Box>
      </Section>
      <br/>
      <Box>
        <Heading p={50} align="center">
          <Section p={50}>Skills</Section>
        </Heading>
      </Box>
        <Section>
          <UnorderedList>
            <ListItem>Advanced Windows Knowledge</ListItem>
            <ListItem>Advanced Linux Knowledge</ListItem> 
            <ListItem>Email Security</ListItem>
            <ListItem>Security Awareness Programs</ListItem>
            <ListItem>MFA Workflows, automation and account/license management with Okta</ListItem>
            <ListItem>Understanding of Cyber Security Frameworks<UnorderedList>
                <ListItem>MITRE Attack Framework</ListItem>
                <ListItem>NIST Frameworks</ListItem>
                <ListItem>ISO </ListItem>
            </UnorderedList></ListItem>
            <ListItem>Computer languages<UnorderedList>
                <ListItem>Python</ListItem>
                <ListItem>Javascript <Link href="https://www.github.com/briggsbastian/PersonalWebsite">See the source of this website!</Link></ListItem> 
                <ListItem>Java</ListItem>
                <ListItem>C++</ListItem>
                <ListItem>PowerShell</ListItem>
                <ListItem>Bash</ListItem>
                <ListItem>Active Directory</ListItem> 
            </UnorderedList></ListItem> 
          </UnorderedList>         
        </Section>      
    
      <br/>
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
