import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsPeopleFill } from 'react-icons/bs';
import Image from 'next/image'
const DUMMY_DATA = [{
    id: '1',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
{
    id: '2',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
{
    id: '3',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
]


const Meetups = () => {

    return (
        <Box textAlign="center" bg="gray" w="100%" height="auto" p="3rem" mt="3rem!important">
            <Heading fontSize="3rem" textAlign="center">Events</Heading>
            <Flex mt="2rem" justify="space-evenly" flexWrap="wrap">
                <Box bg="blackAlpha.900" w="35%" p="2rem">
                    <Flex direction="column">
                        <Image src="/images/events-1.jpg"
                            alt="logo"
                            width={320}
                            height={220}
                        />
                        <Heading>Microsoft Community Event</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                        <Flex direction="column">
                            <Flex align="center">
                                <ImLocation2 />
                                <Text ml="6px">9031 New Ave. Fontana, CA 92335</Text>
                            </Flex>
                            <Flex align="center">
                                <BsFillCalendarDateFill />
                                <Text ml="6px">July 20 2022</Text>
                            </Flex>
                            <Flex align="center">
                                <BsPeopleFill />
                                <Text ml="6px">50</Text>
                            </Flex>
                        </Flex>
                        <Button mt="1rem">Details</Button>
                    </Flex>
                </Box>
                <Box bg="blackAlpha.900" w="35%" p="2rem">
                    <Flex direction="column">
                        <Image src="/images/events-1.jpg"
                            alt="logo"
                            width={320}
                            height={220}
                        />
                        <Heading>Microsoft Community Event</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                        <Flex direction="column">
                            <Flex align="center">
                                <ImLocation2 />
                                <Text ml="6px">9031 New Ave. Fontana, CA 92335</Text>
                            </Flex>
                            <Flex align="center">
                                <BsFillCalendarDateFill />
                                <Text ml="6px">July 20 2022</Text>
                            </Flex>
                            <Flex align="center">
                                <BsPeopleFill />
                                <Text ml="6px">50</Text>
                            </Flex>
                        </Flex>
                        <Button mt="1rem">Details</Button>
                    </Flex>
                </Box>
            </Flex>
            <Button w="25%" mt="3rem" bg="blackAlpha.900">View All</Button>
        </Box>
    )
}



export default Meetups;