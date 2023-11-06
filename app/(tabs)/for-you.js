
import { Center, GluestackUIProvider, Heading } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Header } from "../../components";

const ForYou = () => {
    return (
        <>
            <GluestackUIProvider config={config}>
                <Header title={"For You"} />
                <Center flex={1}>
                    <Heading>For You</Heading>
                </Center>

            </GluestackUIProvider>

        </>
    );
};

export default ForYou;

