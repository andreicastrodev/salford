import { Flex, Heading, Text } from "@chakra-ui/react";

const CommentItem = ({ name, comment }) => {

    return <Flex mb="1rem" mt="2rem" direction="column">
        <Text>{comment}</Text>
        <Heading fontSize="1.4rem" alignSelf="end">-{name}</Heading>
    </Flex>



}
export default CommentItem