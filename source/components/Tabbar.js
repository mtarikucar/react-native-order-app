import { View, Text, TouchableOpacity } from 'react-native';
import React from "react";
import Button from "./button";
import {HomeIcon, ShoppingCart, User} from "./icons"
import Box from "./box";


function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label == "Home" ?(
            <Button  height = {40} onPress={onPress}  flex={1} key={label} bg={isFocused ? "rgb(139,0,0)" : "gray"} borderRadius={10} >
                    <HomeIcon style={{marginTop:10}} />
          </Button>
        ): (
            <Button pt={8}  height = {40}  onPress={onPress} flex={1} key={label}>
                    {label == "Shop" && <ShoppingCart/>}
                    {label == "Profile" && <User/>}
                    <Box size={5} bg={isFocused ? "black" : "white"} borderRadius={100} alignSelf="center" mt={8}/>
                    
          </Button>
        )
      })}
    </View>
  );
}

export default TabBar;