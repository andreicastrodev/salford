import { Flex, Heading, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../pages/ColorModeSwitcher";
import Image from 'next/image'
import Link from "next/link";
const Header = () => {

    return (
        <Flex w="100%" p="1rem" alignItems="center" justifyContent="center">
            <Spacer />
            <UnorderedList listStyleType="none" w="20%" display="flex" justifyContent="space-around">
                <ListItem><Link href="/">Home</Link></ListItem>

            </UnorderedList>
            <Image src="/images/icon-logo.png" alt="logo" width={115} height={115} />
            <UnorderedList listStyleType="none" w="20%" display="flex" justifyContent="space-around">
                <ListItem><Link href="/events">Events</Link></ListItem>
                <ListItem><Link href="/new-event">Add Events</Link></ListItem>            </UnorderedList>
            <Spacer />
            <ColorModeSwitcher />
        </Flex>
    )
}


export default Header;