import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsPeopleFill } from 'react-icons/bs';
import Image from 'next/image'
import Modal from "../layout/Modal";
import Comments from "../layout/comments/Comments";
import { useState } from "react";



const EventDetails = () => {

    const [showComments, setShowComments] = useState(false);


    const toggleCommentsHandler = () => {

        setShowComments(prevState => {
            return !prevState
        })
    }
    return <Flex w="100%" justifyContent="center">
        <Box w="70%" p="2rem">
            <Flex direction="column">
                <Image src="/images/events-1.jpg"
                    alt="logo"
                    width={500}
                    height={500}
                    mb="1rem"
                />
                <Heading mb="1rem">Microsoft Community Event</Heading>
                <Text mb="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis vero voluptatibus deserunt ut eaque mollitia odit quis, facilis, dolor quae, provident dolorem.
                    Laborum facere reiciendis similique repellat, eligendi eius?</Text>
                <Flex direction="column">
                    <Flex mb="1rem" align="center">
                        <ImLocation2 />
                        <Text ml="6px">9031 New Ave. Fontana, CA 92335</Text>
                    </Flex>
                    <Flex mb="1rem" align="center">
                        <BsFillCalendarDateFill />
                        <Text ml="6px">July 20 2022</Text>
                    </Flex>
                    <Flex align="center">
                        <BsPeopleFill />
                        <Text ml="6px">50</Text>
                    </Flex>
                </Flex>
                <Modal />
                <Button onClick={toggleCommentsHandler} alignSelf="center" mt="1rem">Community Comments</Button>
            </Flex>
            {
                showComments ? <Comments /> : ''
            }

        </Box>
    </Flex>
}

export default EventDetails