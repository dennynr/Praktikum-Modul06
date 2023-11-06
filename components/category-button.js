import { Box, GluestackUIProvider, Heading } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { config } from "@gluestack-ui/config";


const CategoryButton = (props) => {
    return (
        <GluestackUIProvider config={config}>
            <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
                <Box
                    bgColor={props.isActive ? "$yellow400" : "$white"}
                    px={"$4"}
                    py={"$1"}
                    mr={"$4"}
                    ml={props.isFirst ? "$4" : "0"}
                    borderRadius={"$full"}
                >
                    <Heading color="$black" fontSize={"$sm"}>
                        {camelToFlat(props.title)}
                    </Heading>
                </Box>
            </TouchableOpacity>
        </GluestackUIProvider>
    );
};

const camelToFlat = (camel) => {
    const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
    let result = "";
    camelCase.forEach(
        (word) =>
            (result = result + word.charAt(0).toUpperCase() + word.slice(1) + " ")
    );
    return result;
};


export default CategoryButton;