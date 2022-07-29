import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Box
} from '@chakra-ui/react'
import { useRef } from 'react';

const CommentsForm = ({ eventId }) => {

    const nameRef = useRef();
    const commentRef = useRef();


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const nameRefValue = nameRef.current.value;
        const commentRefValue = commentRef.current.value;

        const data = {
            name: nameRefValue,
            comment: commentRefValue,
            eventId: eventId
        }


        await fetch('http://localhost:3000/api/new-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <Box mt="5rem" w="50%" alignSelf="center">

            <form onSubmit={onSubmitHandler}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input ref={nameRef} placeholder='Name' />
                </FormControl>
                <FormControl mt="1rem" isRequired>
                    <FormLabel>Comment</FormLabel>
                    <Input ref={commentRef} h="100px" p="1rem" type="text" placeholder='Comment' />
                </FormControl>
                <Button type="submit" mt="1rem" textAlign="end">Submit</Button>
            </form>
        </Box>


    )

}


export default CommentsForm;