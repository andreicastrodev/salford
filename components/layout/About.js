import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";
const About = () => {



    return (
        <Box bg="gray" w="100%" height="90vh" position="relative"  display="flex" justifyContent="center">
            <Flex mt="5rem" width="50%" direction="column" align="center">
                <Heading mb="2rem">Meet the Organizer</Heading>
                <Box >
                    <Image mb="2rem" src="/images/organizer.jpg" borderRadius='full'
                        boxSize='250px' />
                </Box>
                <Text w="70%" text-align="center">
                    Hello! My name is Emma; Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium  sit voluptatem accusantium doloremque laudantium
                </Text>
            </Flex>
        </Box>
    )

}


export default About;