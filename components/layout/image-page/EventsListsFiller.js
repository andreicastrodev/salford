import { Box } from "@chakra-ui/react";
import Image from "next/image"

const EventsListsFiller = () => {


    return (
        <Box marginTop="-20px!important">
            <Box brightness='25%'  filter='grayscale(100%)' position="relative" w="100%"  h="100vh">
                <Image src="/images/img-2.jpg"
                    alt="logo"
                    width={1920}
                    height={1080}
       
                />

            </Box>
        </Box>
    )
}


export default EventsListsFiller;