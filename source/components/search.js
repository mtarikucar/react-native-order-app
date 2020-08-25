import React from "react";
import Box from "./box"
import TextInput from "./input"
import { TechnicalSupport, ShoppingCart } from "./icons";

function search() {
    return(
        
    <Box flexDirection="row" px={20} >
        <TextInput 
        placeholder="search to stuff"
        placeholderTextColor="grey"
        color="black"
        bg="white"
        flex={1}
        height={52}
        borderRadius="little"
        border={2}
        pl={20}
        mr={10}
        >
        </TextInput>
        <Box top={-2}>
        <TechnicalSupport/>
        </Box>
    </Box>
    );
}
export default search