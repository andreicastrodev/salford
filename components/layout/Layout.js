import { Box, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../UI/notification";
import Header from "./Header";

const Layout = (props) => {

    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Box w="100%">
            <Header />
            <Box>
                {props.children}
            </Box>

            {activeNotification && (
                <Notification title={activeNotification.title}
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </Box>
    )
}


export default Layout;