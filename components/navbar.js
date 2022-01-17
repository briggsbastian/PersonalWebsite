import Logo from './logo'
import NextLink from 'next/link'
import {Box, Container, Heading, Flex, Stack, Link, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
import Fonts from './fonts'

const LinkItem = ({href, path, children}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whileAlpha.900')
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#e7e7cb', '#20202380')} style={{backdropFilter:'blur(20px)'}} zIndex={1} {...props}>
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md: 'flex'}} width={{base: 'full', md: 'auto'}} alignItems="center" flexGrow={2}>
          <Fonts />
          <LinkItem href="/projects" path={path}>Projects</LinkItem>
          <LinkItem href="/resume" path={path}>Resume</LinkItem>
          <LinkItem href="/contact_me" path={path}>Email me</LinkItem>
          <NextLink href="https://www.github.com/briggsbastian" passHref>GitHub</NextLink>
        </Stack>
        <Box flex={11} align="right">
          <ThemeToggleButton />
        </Box>
      <Box flex={1} align="right">
        <Box ml={2} display={{base: 'inline-block'}}>
          <Menu>
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
        <Box>
        </Box>
      </Box>
      </Container>
    </Box>
  )
}

export default Navbar
