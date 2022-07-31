import { Box, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import EventDetails from "../../components/meetups/EventDetails";
import { getEventById, getEventsData } from "../../utils/Helper";

const EventsPage = (props) => {

    const router = useRouter();

    if (router.isFallback) {
        return <Spinner size='xl' />

    }

    return (
        <Box>
            <EventDetails title={props.eventDetails.title} address={props.eventDetails.address}
                description={props.eventDetails.description}
                date={props.eventDetails.date}
                imageUrl={props.eventDetails.imageUrl}
                numOfPeople={props.eventDetails.numOfPeople}
                id={props.eventDetails._id}
                comments={props.eventDetails.data.comments}
            />
        </Box>

    )
}


export async function getStaticPaths() {

    const data = await getEventsData();


    return {
        paths: data.map(event => {
            return {
                params: {
                    eventId: event._id.toString()
                }
            }
        }),
        fallback: true, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {

    const event = await getEventById(context.params.eventId)
    console.log(event)
    return {
        // Passed to the page component as props
        props: {
            eventDetails: JSON.parse(JSON.stringify(event)),

        },
    }
}

export default EventsPage;