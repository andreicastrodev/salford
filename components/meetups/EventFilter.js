import {
    FormControl,
    FormLabel,
    Select,
    Button,
    Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef } from 'react';
const EventFilter = ({ filter }) => {


    const yearRef = useRef();
    const monthRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const selectedYear = yearRef.current.value;
        const selectedMonth = monthRef.current.value;

        filter(selectedYear, selectedMonth)
    }
    return <Flex justifyContent="center">
        <form  >
            <FormControl>
                <FormLabel>Year</FormLabel>
                <Select ref={yearRef} placeholder='Select Year'>
                    <option>2021</option>
                    <option>2022</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Month</FormLabel>

                <Select ref={monthRef} placeholder='Select Year'>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </Select>
            </FormControl>
            <Button onClick={onSubmitHandler} type="submit" mt={5}>Submit</Button>
        </form>
    </Flex>



}


export default EventFilter;