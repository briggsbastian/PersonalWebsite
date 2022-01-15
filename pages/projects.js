import { Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import thumbnailMonkey from '../public/funny_monkey.png'
import dotfileThumbnail from '../public/dotfiles_thumbnail.png'
import websiteThumbnail from '../public/Website.png'
import picoDeckThumbnail from '../public/picodeck.jpg' 
const Projects = () => {
    return(
        <Container>
            <Heading>
                <title>
                    Projects
                </title>
            </Heading>

            <SimpleGrid columns={[1,1,1]} gap={6}>
                <Section>
                    <WorkGridItem id="personal portfolio" title="This Website!" thumbnail={websiteThumbnail}>  
                        This website! Which is totally open-source and free for anyone to rip!
                    </WorkGridItem>
                    <br/>
                    <WorkGridItem id="https://github.com/briggsbastian/my_dotfiles" title="My Dotfiles" thumbnail={dotfileThumbnail}>
                        My dotfiles for fish, neovim, tmux, ranger, alacritty, and all the other tools I use way too much!
                    </WorkGridItem>
                    <br/>
                    <WorkGridItem id="/projects/PICO_Deck" title="PICO_Deck" thumbnail={picoDeckThumbnail}>
                        $150 for something I can make for about under $20? No!
                    </WorkGridItem>
                </Section>
            </SimpleGrid>    
        </Container>
    )
}

export default Projects
