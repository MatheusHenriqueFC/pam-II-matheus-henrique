import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const image = {uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.quizur.com%2Fquiz%2Fqual-shitpost-vc-e-QYAB&psig=AOvVaw2qil5yFGXdSduXBIRaYglO&ust=1723597837262000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKil-Lnk8IcDFQAAAAAdAAAAABAT'};

const App = () => (
  <View style={styles.container}>
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
