import { Box, Button, Flex, Heading, Text, GridItem } from "@chakra-ui/react";
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsPeopleFill } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
const MeetupItem = ({ title, description, address, date, numOfPeople, id, imageUrl, }) => {



    return <GridItem bg="blackAlpha.900" p="2rem">
        <Flex direction="column">
            <Image
                src={`${imageUrl}`}
                blurDataURL={`${imageUrl}`}
                alt="logo"
                width={320}
                height={220}
                placeholder="blur"
            />
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            <Flex direction="column">
                <Flex align="center">
                    <ImLocation2 />
                    <Text ml="6px">{address}</Text>
                </Flex>
                <Flex align="center">
                    <BsFillCalendarDateFill />
                    <Text ml="6px">{date}</Text>
                </Flex>
                <Flex align="center">
                    <BsPeopleFill />
                    <Text ml="6px">{numOfPeople}</Text>
                </Flex>
            </Flex>
            <Link href={`/events/${id}`} passHref>
                <Button mt="1rem">Details</Button>
            </Link>



        </Flex>


    </GridItem>



}


export default MeetupItem