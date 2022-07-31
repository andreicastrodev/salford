import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Form,
    Button,
    Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useContext, useRef, useState } from 'react';
import NotificationContext from '../../store/notification-context';
const NewEvent = () => {

    const titleRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const router = useRouter();

    const notificationCtx = useContext(NotificationContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const titleRefValue = titleRef.current.value;
        const addressRefValue = addressRef.current.value;
        const dateRefValue = dateRef.current.value;
        const descriptionRefValue = descriptionRef.current.value;
        const imageRefValue = imageRef.current.value;

        const data = {
            title: titleRefValue,
            address: addressRefValue,
            date: dateRefValue,
            description: descriptionRefValue,
            imageUrl: imageRefValue,
            numOfPeople: 0
        }

        try {
            notificationCtx.showNotification({
                title: 'New Event',
                message: 'Adding an event',
                status: 'pending'
            })
            await fetch('http://localhost:3000/api/new-event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            notificationCtx.showNotification({
                title: 'New Event',
                message: 'Event Added',
                status: 'success'
            })
            router.push('/events');
        } catch (error) {
            notificationCtx.showNotification({
                title: 'New Event',
                message: `${error.message}`,
                status: 'error'
            })
        }

    }

    return <Box w="50%">
        <form onSubmit={onSubmitHandler}>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={titleRef} placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input ref={addressRef} placeholder='Address' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input ref={dateRef} placeholder='Date' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input ref={descriptionRef} placeholder='Description' />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input ref={imageRef} placeholder='Image Url' />
            </FormControl>
            <Button type="submit" mt={5}>Submit</Button>

        </form>

    </Box>
}



export default NewEvent;