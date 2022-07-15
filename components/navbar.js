import Logo from './logo'
import NextLink from 'next/link'
import {Box, Container, Heading, Flex, Stack, Link, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
import Fonts from './fonts'

const LinkItem = ({href, path, children, target, ...props}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whileAlpha.900')
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor} target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#dfd4b9', '#20202380')} style={{backdropFilter:'blur(15px)'}} zIndex={2} {...props}>
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={100}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'auto'}} alignItems="center" flexGrow={10} mt={{base: 4, md: 0}}>
          <Fonts />
          <LinkItem href="/projects" path={path}>Projects</LinkItem>
          <LinkItem href="/resume" path={path}>Resume</LinkItem>
          <LinkItem href="/contact_me" path={path}>Email me</LinkItem>
          <NextLink href="https://www.github.com/briggsbastian" passHref>GitHub</NextLink>
        </Stack>
        <Box flex={11} align="right">
          <ThemeToggleButton />
        
          <Box align="right" ml={2} display={{base: 'inline-block', md: 'none'}}>
          <Menu isLazy id="navbar-menu">
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
            <MenuList>
              <NextLink href="/projects" passHref>
                <MenuItem as={Link}>Projects</MenuItem>
              </NextLink>
              <NextLink href="/resume" passHref>
                <MenuItem as={Link}>Resume</MenuItem>
              </NextLink>
              <NextLink href="/contact_me" passHref>
                <MenuItem as={Link}>Email me</MenuItem>
              </NextLink>
              <NextLink href="https://www.github.com/briggsbastian/" passHref>
                <MenuItem as={Link}>GitHub</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar