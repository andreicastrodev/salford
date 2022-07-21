
import { Box, VStack } from '@chakra-ui/react'
import About from '../components/layout/About'
import EventsAbout from '../components/layout/image-page/EventsAbout'
import Landing from '../components/layout/Landing'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <VStack w="100%">
      <Landing />
      <EventsAbout />
      <About />
    </VStack>
  )
}
