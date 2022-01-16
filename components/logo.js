import Link from 'next/link'
import { useColorModeValue, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px
padding: 5px;

&:hover img {
  transform: rotate(15deg);
}
`

const Logo = () => {
  const footPrintImg = `/../public/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/"><a><LogoBox>
    <Image src={footPrintImg} width={25} height={25} alt="logo"/>
    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily="Fira Mono" fontWeight="bold" ml={3}>
        Briggs Bastian
    </Text>
    </LogoBox></a></Link>
  )
}

export default Logo
