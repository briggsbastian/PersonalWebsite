import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import dotfileThumbnail from '../public/dotfiles_thumbnail.png'
import websiteThumbnail from '../public/Website.png'
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
                <Box p={5}>
                    <WorkGridItem id="https://github.com/briggsbastian/PersonalWebsite" title="This Website!" thumbnail={websiteThumbnail}>  
                        This website! Which is totally open-source and free for anyone to rip!
                    </WorkGridItem>
                    <br/>
                    <WorkGridItem id="https://github.com/briggsbastian/my_dotfiles" title="My Dotfiles" thumbnail={dotfileThumbnail}>
                        My dotfiles for fish, neovim, tmux, ranger, alacritty, and all the other tools I use way too much!
                    </WorkGridItem>
                    <br/>
                </Box>
                </Section>
            </SimpleGrid>    
        </Container>
    )
}

export default Projects
