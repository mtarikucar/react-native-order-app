import * as React from "react";
import {SafeAreaView} from "react-native";
import BoxCenter from "../components/box-center";
import Box from "../components/box"
import Line from "../components/profileLine";
import Button from "../components/button";
import Text from "../components/Text"
import Location from "../components/icons/Location";


const Profile = () => {
    return (
<BoxCenter>
  <Line/>
  <Box flexDirection="row" flex={3} as = {SafeAreaView} bg="rgb(198,0,0)" borderTopRightRadius={30} borderTopLeftRadius={30}>
    <Button flex={1} alignItems="center" flexDirection="column" >
    <Location onPress={() => navigation.navigate("Navigation")}/>
      {/*<Text mt={20} fontWeight="bold">geçmişte verdiği siparişler burada gözükecek</Text>*/}
    </Button>
</Box>

</BoxCenter>
      );
  };

  export default Profile;