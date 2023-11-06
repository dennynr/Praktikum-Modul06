import {
    Box,
    Heading,
    Text,
    Image,
    Divider,
    ScrollView,
    Button,
    ButtonText,
    GluestackUIProvider,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Header } from "../components";
import { Link, useLocalSearchParams } from "expo-router";
import { format } from "date-fns";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <GluestackUIProvider config={config}>

                <Header title={"News"} withBack={true} />
                <ScrollView>
                    <Image
                        source={{ uri: params.image }}
                        w={"$full"}
                        h={"$48"}
                        alt="News Image"
                        role="img"
                    />
                    <Box p={"$4"}>
                        <Text mb={"$1"}>{format(new Date(params.date), "dd MMMM yyyy")}</Text>
                        <Heading lineHeight={"$xl"} fontSize={"$2xl"}>
                            {params.title}
                        </Heading>
                        <Divider my={"$4"} />
                        <Text marginBottom={"$4"}>{params.desc}</Text>
                        <Link
                            href={{
                                pathname: "/web",
                                params: { link: params.link },
                            }}
                            asChild
                        >
                            <Button backgroundColor="$red700" borderRadius={"$full"}>
                                <ButtonText>Read More</ButtonText>
                            </Button>
                        </Link>
                    </Box>
                </ScrollView>
            </GluestackUIProvider>

        </>
    );
};

export default NewsDetail;
