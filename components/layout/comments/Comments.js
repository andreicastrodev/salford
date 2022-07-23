import { Flex, Heading, Text } from "@chakra-ui/react";
import CommentsForm from "./CommentsForm";

const Comments = () => {

    return (<Flex direction="column">
        <CommentsForm />
        <Flex mb="1rem" mt="2rem" direction="column">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque sint, cumque aperiam iusto unde dolor, amet totam laborum blanditiis labore porro incidunt.
                Animi tenetur quo et inventore esse consectetur!</Text>
            <Heading fontSize="1.4rem" alignSelf="end">-Sara Delavinge</Heading>
        </Flex>
        <Flex mb="1rem" direction="column">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque sint, cumque aperiam iusto unde dolor, amet totam laborum blanditiis labore porro incidunt.
                Animi tenetur quo et inventore esse consectetur!</Text>
            <Heading fontSize="1.4rem" alignSelf="end">-Sara Delavinge</Heading>
        </Flex>
        <Flex direction="column">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque sint, cumque aperiam iusto unde dolor, amet totam laborum blanditiis labore porro incidunt.
                Animi tenetur quo et inventore esse consectetur!</Text>
            <Heading fontSize="1.4rem" alignSelf="end">-Sara Delavinge</Heading>
        </Flex>
    </Flex>);
}


export default Comments;