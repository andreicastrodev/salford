import { Box, VStack } from "@chakra-ui/react";
import Header from "./Header";

const Layout = (props) => {

    return (
        <Box w="100%">
            <Header />
            <Box>
                {props.children}
            </Box>
        </Box>
    )
}


export default Layout;