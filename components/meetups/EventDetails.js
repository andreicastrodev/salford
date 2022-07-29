import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsPeopleFill } from 'react-icons/bs';
import Image from 'next/image'
import Modal from "../layout/Modal";
import Comments from "../layout/comments/Comments";
import { useState } from "react";



const EventDetails = ({ title, description, address, date, numOfPeople, imageUrl, id, comments }) => {

    console.log(imageUrl)
    const [showComments, setShowComments] = useState(false);


    const toggleCommentsHandler = () => {

        setShowComments(prevState => {
            return !prevState
        })
    }
    return <Flex w="100%" justifyContent="center">
        <Box w="70%" p="2rem">
            <Flex direction="column">
                <Image
                    src={`${imageUrl}`}
                    blurDataURL={`${imageUrl}`}
                    placeholder="blur"
                    alt="logo"
                    width={500}
                    height={500}
                    mb="1rem"
                />
                <Heading mb="1rem">{title}</Heading>
                <Text mb="1rem">{description}</Text>
                <Flex direction="column">
                    <Flex mb="1rem" align="center">
                        <ImLocation2 />
                        <Text ml="6px">{address}</Text>
                    </Flex>
                    <Flex mb="1rem" align="center">
                        <BsFillCalendarDateFill />
                        <Text ml="6px">{date}</Text>
                    </Flex>
                    <Flex align="center">
                        <BsPeopleFill />
                        <Text ml="6px">{numOfPeople}</Text>
                    </Flex>
                </Flex>
                <Modal />
                <Button onClick={toggleCommentsHandler} alignSelf="center" mt="1rem">Community Comments</Button>
            </Flex>
            {
                showComments ? <Comments comments={comments} id={id} /> : ''
            }
        </Box>
    </Flex>
}

export default EventDetails