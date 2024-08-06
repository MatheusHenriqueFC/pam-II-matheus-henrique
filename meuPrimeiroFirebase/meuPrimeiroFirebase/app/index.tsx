import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9lPQlH-PxGqA1W3DrZIyWg4bmSSpZ7x4",
  authDomain: "meuprimeirofirebase-50710.firebaseapp.com",
  projectId: "meuprimeirofirebase-50710",
  storageBucket: "meuprimeirofirebase-50710.appspot.com",
  messagingSenderId: "75608315294",
  appId: "1:75608315294:web:44f1d366ee2ed8e727728f"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
   const [nomes, setNomes] = useState([]);

   useEffect(() => {
    const fetchDate = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    setNomes(data);
   };

   fetchData();
 }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de Nomes: </Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
