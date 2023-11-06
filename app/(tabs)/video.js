import { Center, GluestackUIProvider, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { config } from "@gluestack-ui/config";



const Video = () => {
    return (
        <>
            <GluestackUIProvider config={config}>
                <Header title={"Video"} />
                <Center flex={1}>
                    <Heading>Video</Heading>
                </Center>
            </GluestackUIProvider>

        </>
    );
};

export default Video;
