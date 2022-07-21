import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Landing = () => {

    return (
        <Flex justifyContent="center" mt="10" bg="primary" w="100%" height="100vh">
            <Flex justifyContent="center" direction="column" align="start">
                <Heading color="secondary"  fontSize="10rem">
                    Salford
                </Heading>
                <Text color="secondary" fontSize="3rem">
                    Manage your events.
                </Text>
            </Flex>
        </Flex>
    )

}


export default Landing;