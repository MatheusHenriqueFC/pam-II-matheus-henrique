import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const image = {uri: 'https://static.wikia.nocookie.net/onepiece/images/8/87/One_Piece_Anime_Logo.png/revision/latest/scale-to-width-down/1000?cb=20190128234845&path-prefix=pt'};

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
