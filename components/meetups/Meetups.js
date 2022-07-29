import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";

import MeetupItem from "./MeetupItem";


const Meetups = (props) => {



    if(!props.events){
        return <Text>No Meetup</Text>
    }

    return (
        <Box textAlign="center" bg="gray" w="100%" height="auto" p="3rem" mt="3rem!important">
            <Heading mb="2rem" fontSize="3rem" textAlign="center">Events</Heading>
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
                    />
                })}
            </Grid>
        </Box>
    )
}



export default Meetups;