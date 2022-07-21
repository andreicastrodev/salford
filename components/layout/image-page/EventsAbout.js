import { Box } from "@chakra-ui/react";
import Image from "next/image"

const EventsAbout = () => {


    return (
        <Box marginTop="-20px!important">
            <Box filter='auto' brightness='25%' position="relative" w="100%"  h="100vh">
                <Image src="/images/img-1.jpg"
                    alt="logo"
                    width={1920}
                    height={1080}
       
                />

            </Box>
        </Box>
    )
}


export default EventsAbout;