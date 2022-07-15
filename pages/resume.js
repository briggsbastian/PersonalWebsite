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
          <br/>
      <Box>
          <Heading p={50} align="center">
            Work Experience
          </Heading>
          <br/>
      </Box>
      </Section>

      <Section>
        <Box>
            <Heading>Sprout Mortgage</Heading><br/> <Heading as='h3' size='md'>
              <Section>Help Desk technician</Section>
              <Section>FEB 2022 - JULY 2022</Section>
            </Heading>
            <Section>
              <Paragraph>
                <Section>Working as a helpdesk support technician, did software and registry troubleshooting for Windows 10 and 11, for programs such as Encompass, Office, Adobe. Provisioned licenses through in our Microsoft Cloud environment. Handled MFA accounts through Okta and used Okta workflows to automate tasks. I handled email security using KnowBe4 PhishER when users reported suspcious emails, and filtered out malicious and spam emails using Barracuda.</Section>
              </Paragraph>
            </Section>
        </Box>
      </Section>
      <br/>
      <Section>
        <Box>
        <Heading>JNC Management</Heading> <br/> <Heading as="h3" size="md">
          <Section>Sales Associate / Store Manager</Section> 
          <Section>JUNE 2019 - MARCH 2021</Section>
          </Heading>
          <Section>
            <Paragraph>Working as a sales associate, I used sales techniques to try to maximize the profits that we would see per store, also handling all customer support requests from exchanges to refunds.</Paragraph>
            <br/>
            <Paragraph>As a manager I managed hours for my employees and did interviews to hire new ones. Lead projects to add new products or new promotions to try to get more sales. I would make deposits to our local bank for the company and make sure that relations were good with vendors to ensure continued supply of product</Paragraph>
          </Section>
        </Box>
      </Section>
      <br/>
      <Section>
        <Box>
          <Heading as='h3' size='lg'>McDonald's</Heading> <br/>
           <Heading as='h3' size='md'><Section>Crew Member</Section><Section>SEPT 2017 - JUNE 2019</Section>
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
        <Section>
          <Heading p={50}as="h3" align="center"><Section>Education</Section></Heading> <br/>
          <Heading as='h3' size='lg'><Section>UCSD Extension Security+ Bootcamp</Section></Heading>
          <Heading as='h3' size='mg'><Section>March 2021 - September 2021</Section></Heading>
          <Paragraph>
             <Section>Although I learned most of my programming outside of school, here I learned how to use GNU/Linux, which is now my daily driver operating system. My command line expirence with Bash like shells (bash, zsh, fish), CMD and Powershell.</Section> 
          </Paragraph>
        </Section>
      </Box>

      <br/>

      <NextLink href="https://docs.google.com/document/d/1q7hqYhzN1s0EuWbOUd3LUVO7KMBBgl4CQgWoNLtJec0/edit?usp=sharing">
      <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
        See my Resume in a DOC format
      </Button>
      </NextLink>
    </Container>
    </Layout>
  )
}

export default Resume
