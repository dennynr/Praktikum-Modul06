import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { WebView } from "react-native-webview";
import { GluestackUIProvider, Spinner } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";


const Web = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <GluestackUIProvider config={config}>
                <Header title={"Read"} withBack={true} />
                <WebView
                    source={{ uri: params.link }}
                    startInLoadingState={true}
                    renderLoading={() => <Spinner size={"large"} color={"$black"} />}
                />
            </GluestackUIProvider>
        </>
    );
};

export default Web;