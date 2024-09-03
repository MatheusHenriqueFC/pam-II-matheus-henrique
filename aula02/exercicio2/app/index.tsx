import React from "react";
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from 'expo-router';

const App = () => {
  const handlePress = () => {
    Linking.openURL('https://youtu.be/rHgUxtL8qyM?si=mexBkFArWQ5WUAYl');
  };
  const buttonPress = () => {
    Linking.openURL('https://youtu.be/H7KFT2X5h68?si=5wZKJINmmTe2wIeL');
  };
  const Press = () => {
    Linking.openURL('https://youtu.be/v8bZVdTgXoY?si=CVNx1IVyKzyHO9R2');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Escolha uma abertura para poder assistir!</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/f7/b0/2a/f7b02aa0a07898a8d30e18cc79220d10.gif' }}
          style={styles.onePiece}
        />
        <TouchableOpacity style={styles.buttonOP} onPress={handlePress}>
          <Text style={styles.buttonTextOP}>Clique aqui</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://c.tenor.com/itwRaeFTKJMAAAAC/tenor.gif' }}
          style={styles.blackClover}
        />
        <TouchableOpacity style={styles.buttonBC} onPress={buttonPress}>
          <Text style={styles.buttonTextBC}>Clique aqui</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://c.tenor.com/9zCfXxNQxB0AAAAC/tenor.gif' }}
          style={styles.jujutsuKaisen}
        />
        <TouchableOpacity style={styles.buttonJJK} onPress={Press}>
          <Text style={styles.buttonTextJJK}>Clique aqui</Text>
        </TouchableOpacity>

        <Link href="/index2" asChild>
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginBottom: 50,
  },
  onePiece: {
    width: 225,
    height: 225,
  },
  blackClover: {
    width: 225,
    height: 225,
    top: 50,
  },
  jujutsuKaisen: {
    width: 225,
    height: 225,
    top: 110,
  },
  buttonOP: {
    backgroundColor: 'red',
    top: 5,
    padding: 10,
    borderRadius: 50,
  },
  buttonTextOP: {
    color: 'white',
    fontSize: 20,
  },
  buttonBC: {
    backgroundColor: 'black',
    top: 55,
    padding: 10,
    borderRadius: 50,
  },
  buttonTextBC: {
    color: 'white',
    fontSize: 20,
  },
  buttonJJK: {
    backgroundColor: 'purple',
    top: 115,
    padding: 10,
    borderRadius: 50,
  },
  buttonTextJJK: {
    color: 'white',
    fontSize: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  buttonLink: {
    backgroundColor: 'blue',
  },
});

export default App;
