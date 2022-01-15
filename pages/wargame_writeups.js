import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import thumbnailMonkey from '../public/funny_monkey.png'

const Wargames = () => {
    return(
        <Container>
            <Heading>
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="This Website!" title="HTB - idk fuckin something" thumbnail={thumbnailMonkey}>  
                        This is where I post all of my wargame writeups
                    </WorkGridItem>
                </Section>
            </SimpleGrid>    
        </Container>
    )
}

export default Wargames
