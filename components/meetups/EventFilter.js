import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'
const EventFilter = () => {


    return <form >
        <FormControl margin="auto" w="35%">
            <FormLabel>Filter</FormLabel>
            <Select placeholder='Select Year'>
                <option>2021</option>
                <option>2022</option>
            </Select>
        </FormControl>
    </form>

}


export default EventFilter;