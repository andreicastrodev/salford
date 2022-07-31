// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import Layout from '../components/layout/Layout'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { NotificationContextProvider } from '../store/notification-context';
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

// Router Events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>

    </ChakraProvider>
  )
}

export default MyApp;