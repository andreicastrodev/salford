import { Flex, Heading, Text } from "@chakra-ui/react";

const CommentItem = ({ name, comment }) => {

    return <Flex w="75%" mb="1rem" mt="4rem" direction="column" alignSelf="center">
        <Text>{comment}</Text>
        <Heading fontSize="1.4rem" alignSelf="end">-{name}</Heading>
    </Flex>



}
export default CommentItem