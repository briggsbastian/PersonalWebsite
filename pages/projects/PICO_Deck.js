import {Box, Container, Heading} from '@chakra-ui/react'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
const picodeck = () => {  
  return (
    <Container>
    <Box p={5}>
      <Section varaint="section-title">
          <Heading>PICO_Deck</Heading>
          <br/>
          <Section><Paragraph pd={20}>The PICO_Deck is a Raspberry PI PICO based macro-keyboard that is programmmamable with a python based prgram with an easy to use GUI and easy integration with programs like Discord, OBS, Zoom. Also completely Open Source</Paragraph></Section>
        <Paragraph>It is currently in a very early development, and more information will be posted, including a Git Repository</Paragraph> 
    </Section></Box>
    </Container>
  )
}

export default picodeck

