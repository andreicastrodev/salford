import { Flex, Heading, Box, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import CommentItem from "./CommentItem";
import CommentsForm from "./CommentsForm";

const Comments = ({ id, comments }) => {

    const [initComments, setComments] = useState(comments);
    const [isLoading, setIsLoading] = useState(false);

    const getCommentsHandler = async (comments) => {
        setComments(comments)
    }

    const loaderHandler = (loadingState) => {
        setIsLoading(loadingState)
    }

    return (<Flex direction="column" justifyContent="center">
        <CommentsForm loader={loaderHandler} getComments={getCommentsHandler} eventId={id} />
        <Box mt="5rem" overflowX="hidden" alignSelf="center" overflow="scroll" w="75%">
            {isLoading && <Box textAlign="center"><Spinner mt="3rem" size="xl" /> </Box>}
            {!isLoading && initComments.length === 0 && <Text textAlign="center">No Comments!</Text>}
            {initComments.map((comment) => {
                return <CommentItem name={comment.name} comment={comment.comment} key={comment._id} />
            })}
        </Box>

    </Flex>);
}


export default Comments;