import * as React from "react";
import { Text, View, Button, SafeAreaView} from "react-native";
import BoxCenter from "../components/box-center";
import Search from "../components/search";
const Shop = ({navigation}) => {
    return (
      <BoxCenter>
        <Search/>
      </BoxCenter>
      );
  };

  export default Shop;