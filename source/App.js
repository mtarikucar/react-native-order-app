import * as React from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Box from "./components/box";
import theme from "./utils/theme";

import Navigation from "./screens/navigation";
import Home from "./screens/home";
import QR from "./screens/QR";
import Shop from "./screens/Shop";
import Profile from "./screens/profile";
import TabBar from "./components/Tabbar";


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen key={1} name="Home" component={Home} />
      <HomeStack.Screen key={2} name="Navigation" component={Navigation} />
      <HomeStack.Screen key={3} name="QR" component={QR} />
    </HomeStack.Navigator>
  );
}
function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen key={1} name="Shop" component={Shop} />
    </ShopStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen key={1} name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props} />} >
            <Tab.Screen name="Shop" component={ShopStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
};
export default App;