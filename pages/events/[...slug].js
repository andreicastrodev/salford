import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import MeetupItem from "../../components/meetups/MeetupItem";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy";
const FilteredEventsPage = () => {

    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p>Loading....</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth)
        || numYear > 2030 || numYear < 2021
        || numMonth < 1 || numMonth > 12) {
        return <p>Invalid Filter....</p>
    }


    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Text textAlign="center" mt="5rem">No Events Found</Text>
    }

    console.log(filteredEvents);



    return <Box textAlign="center" bg="gray" w="100%" height="auto" p="3rem" mt="3rem!important">
        <Heading mb="2rem" fontSize="3rem" textAlign="center">{`${filteredMonth}, ${filteredYear}`}</Heading>
        <Grid mt="3rem" templateColumns='repeat(3, 1fr)' gap={3}>
            {filteredEvents.map(event => {
                return <MeetupItem title={event.title}
                    address={event.address}
                    location={event.location}
                    date={event.date}
                    numOfPeople={event.numOfPeople}
                    key={event.id}
                />
            })}
        </Grid>
    </Box>

}


export default FilteredEventsPage;