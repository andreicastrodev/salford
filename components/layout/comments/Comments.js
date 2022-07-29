import { Flex, Heading, Text } from "@chakra-ui/react";
import CommentItem from "./CommentItem";
import CommentsForm from "./CommentsForm";

const Comments = ({ id, comments }) => {

    return (<Flex direction="column" justifyContent="center">
        <CommentsForm eventId={id} />
        {comments.map((comment) => {
            return <CommentItem name={comment.name} comment={comment.comment} key={comment._id} />
        })}
    </Flex>);
}


export default Comments;