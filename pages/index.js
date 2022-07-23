
import { Box, VStack } from '@chakra-ui/react'
import About from '../components/layout/About'
import Footer from '../components/layout/Footer'
import EventsAbout from '../components/layout/image-page/EventsAbout'
import EventsListsFiller from '../components/layout/image-page/EventsListsFiller'
import Landing from '../components/layout/Landing'
import Testimonials from '../components/layout/Testimonials'
import Meetups from '../components/meetups/Meetups'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <VStack w="100%">
      <Landing />
      <EventsAbout />
      <About />
      <EventsListsFiller />
      <Meetups />
      <Testimonials />
      <Footer />
    </VStack>
  )
}
