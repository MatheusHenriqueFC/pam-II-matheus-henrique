import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text } from 'react-native'; // Adicionei o Text aqui
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyD9lPQlH-PxGqA1W3DrZIyWg4bmSSpZ7x4",
  authDomain: "meuprimeirofirebase-50710.firebaseapp.com",
  projectId: "meuprimeirofirebase-50710",
  storageBucket: "meuprimeirofirebase-50710.appspot.com",
  messagingSenderId: "75608315294",
  appId: "1:75608315294:web:44f1d366ee2ed8e727728f"
};

// Inicialize o Firebase antes de qualquer uso
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataList, setDataList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('Nomes').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataList(data);
    });
    return () => unsubscribe();
  }, []);

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({ Nome: nome, Sobrenome: sobrenome });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };

  const updateData = async () => {
    if (!selectedId) {
      Alert.alert('Erro', 'Nenhum item selecionado para atualizar.');
      return;
    }
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.doc(selectedId).update({ Nome: nome, Sobrenome: sobrenome });
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setNome('');
      setSobrenome('');
      setSelectedId(null);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar os dados.');
    }
  };

  const deleteData = async (id) => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.doc(id).delete();
      Alert.alert('Sucesso', 'Dados excluídos com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao excluir os dados.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"        
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Cadastrar" onPress={sendData} />
      <Button title="Atualizar" onPress={updateData} disabled={!selectedId} />
      <FlatList
        data={dataList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{`${item.Nome} ${item.Sobrenome}`}</Text>
            <Button title="Selecionar" onPress={() => {
              setNome(item.Nome);
              setSobrenome(item.Sobrenome);
              setSelectedId(item.id);
            }} />
            <Button title="Excluir" onPress={() => deleteData(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default App;
