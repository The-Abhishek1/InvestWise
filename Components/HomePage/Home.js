import { View, Text, Image, TextInput, StatusBar } from "react-native";
import React from "react";
var logo = "assets/icon.png";
const Home = () => {
  console.log("statusBarHeight: ", StatusBar.currentHeight);
  return (
    <View>
      <View>
        <Image uri={logo}></Image>
        <TextInput
          style={{
            marginTop: 45,
            marginLeft: 40,
            height: 40,
            backgroundColor: "red",
            padding: 10,
            width: 300,
            borderRadius: 15,
          }}
          defaultValue="Name me!"
        />
      </View>
    </View>
  );
};

export default Home;
