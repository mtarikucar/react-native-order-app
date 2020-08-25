import * as React from "react";
import { SafeAreaView } from "react-native";
import Line from "../components/profileLine";
import Box from "../components/box";
import Text from "../components/Text";
import Button from "../components/button";
import { Location, Love, QrCodeScan } from "../components//icons"
import Navigation from "../screens/navigation"

import BoxCenter from "../components/box-center";

const Home = ({ navigation }) => {
    return (
        <BoxCenter >
            <Line />
            <Box flexDirection="row" flex={3} as={SafeAreaView} bg="rgb(198,0,0)" borderTopRightRadius={30} borderTopLeftRadius={30}>
                <Button flex={1} alignItems="center" flexDirection="row" >
                    <Love onPress={() => navigation.navigate("Shop")} width={128} height={128} />
                    <Location onPress={() => navigation.navigate("Navigation")} width={128} height={128} />
                    <QrCodeScan onPress={() => navigation.navigate("QR")} width={128} height={128} />

                </Button>
            </Box>

        </BoxCenter>
    );
};


export default Home;