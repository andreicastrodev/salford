
import { Box, VStack } from '@chakra-ui/react'
import About from '../components/layout/About'
import Footer from '../components/layout/Footer'
import EventsAbout from '../components/layout/image-page/EventsAbout'
import EventsListsFiller from '../components/layout/image-page/EventsListsFiller'
import Landing from '../components/layout/Landing'
import Testimonials from '../components/layout/Testimonials'
import Meetups from '../components/meetups/Meetups'

export default function Home(props) {
  return (
    <VStack w="100%">
      <Landing />
      <EventsAbout />
      <About />
      <EventsListsFiller />
      <Meetups events={props.events} />
      <Testimonials />
      <Footer />
    </VStack>
  )
}


export async function getServerSideProps(context) {

  const res = await fetch('http://localhost:3000/api/get-events');
  const data = await res.json();
  return {
    props: {
      events: data
    }, // will be passed to the page component as props
  }
}