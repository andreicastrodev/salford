import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Testimonials = () => {
    return <Box h="50vh">
        <Flex p="2rem" w="100%" wrap="wrap" alignItems="center"  justifyContent="space-evenly">
            <Flex w="40%"  direction="column" alignItems="center">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem eveniet perspiciatis optio in et reiciendis
                    eos quod cumque corporis quos? Rerum veritatis ab excepturi dolorum.
                    Voluptatibus modi architecto reprehenderit placeat?
                </Text>
                <Heading>Anna Calisto</Heading>
            </Flex>
            <Flex  w="40%"   direction="column" alignItems="center">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem eveniet perspiciatis optio in et reiciendis
                    eos quod cumque corporis quos? Rerum veritatis ab excepturi dolorum.
                    Voluptatibus modi architecto reprehenderit placeat?
                </Text>
                <Heading>Anna Calisto</Heading>
            </Flex>
            <Flex mt="3rem"  w="40%"   direction="column" alignItems="center">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Exercitationem eveniet perspiciatis optio in et reiciendis
                    eos quod cumque corporis quos? Rerum veritatis ab excepturi dolorum.
                    Voluptatibus modi architecto reprehenderit placeat?
                </Text>
                <Heading>Anna Calisto</Heading>
            </Flex>
        </Flex>
    </Box>
}


export default Testimonials;