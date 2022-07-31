import { Box, Button, Grid, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

import MeetupItem from "./MeetupItem";


const Meetups = (props) => {

    const [isLoading, setIsLoading] = useState(false);


    const loaderHandler = (state) => {

        setIsLoading(state);
    }
    if (!props.events) {
        return <Text>No Meetup</Text>
    }

    return (
        <Box textAlign="center" bg="gray" w="100%" height="auto" p="3rem" mt="3rem!important">
            <Heading mb="2rem" fontSize="3rem" textAlign="center">Events</Heading>

            {isLoading && <Box> <Spinner size="xl" mt="3rem" color="black" /> </Box >}
            <Grid mt="3rem" templateColumns='repeat(3, 1fr)' gap={3}>
                {props.events.map(event => {
                    return <MeetupItem title={event.title}
                        address={event.address}
                        location={event.location}
                        date={event.date}
                        numOfPeople={event.numOfPeople}
                        id={event._id}
                        imageUrl={event.imageUrl}
                        key={event._id}
                        loader={loaderHandler}
                    />
                })}
            </Grid>
        </Box>
    )
}



export default Meetups;