import React from "react";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text
      style={{
        color: 'dark blue',
      }}
      >Clique para assistir à uma abertura</Text>

      <Image
       source={{
        uri: 'https://i.pinimg.com/originals/f7/b0/2a/f7b02aa0a07898a8d30e18cc79220d10.gif',
      }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: 150,
      }}
      >
      </Image>
    </View>
  );
}
