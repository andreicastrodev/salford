import {
    FormControl,
    FormLabel,
    Button,
    Input,
} from '@chakra-ui/react'

const CommentsForm = () => {


    return (
        <form>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Name' />
            </FormControl>
            <FormControl  mt="1rem"  isRequired>
                <FormLabel>Comment</FormLabel>
                <Input type="text" placeholder='Comment' />
            </FormControl>
            <Button mt="1rem" textAlign="end">Submit</Button>
        </form>

    )

}


export default CommentsForm;