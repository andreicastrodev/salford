// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {

  primary: '#e37713',
  primaryLight: '#f39237',
  secondary: "#ddddbb",
  dark: '#f39237',
  light: "#ffffff",
  gray: '#9d9d9c'

}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp;