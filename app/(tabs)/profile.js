import { Center, GluestackUIProvider, Heading } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Header } from "../../components";

const Profile = () => {
    return (
        <>
            <GluestackUIProvider config={config}>
                <Header title={"Profile"} />
                <Center flex={1}>
                    <Heading>Profile</Heading>
                </Center>

            </GluestackUIProvider>

        </>
    );
};

export default Profile;