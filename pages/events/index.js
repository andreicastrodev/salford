import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import EventFilter from "../../components/meetups/EventFilter";
import Meetups from "../../components/meetups/Meetups";
const EventsPage = (props) => {
    const router = useRouter();

    const filterEventHandler = (year, month) => {
        router.push(`/events/${year}/${month}`)
    }


    return (
        <Flex direction="column" justifyContent="center">
            <EventFilter filter={filterEventHandler} />
            <Meetups events={props.events} />
        </Flex>
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


export default EventsPage;