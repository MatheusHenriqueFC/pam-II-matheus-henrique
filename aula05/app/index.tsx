import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/combat/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
//npm install firebase@latest

// configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyD9lPQlH-PxGqA1W3DrZIyWg4bmSSpZ7x4",
  authDomain: "meuprimeirofirebase-50710.firebaseapp.com",
  projectId: "meuprimeirofirebase-50710",
  storageBucket: "meuprimeirofirebase-50710.appspot.com",
  messagingSenderId: "75608315294",
  appId: "1:75608315294:web:44f1d366ee2ed8e727728f"
};

// inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =  useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //o usuário foi criado com sucesso
          const user = userCredential.user;
          console.log('Usuário criado com sucesso', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro ao criar usuarios: ', error);
        });
      }catch (error){
        console.log(error);
      }
    };

    return (
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Cadastrar" onPress={handleSignup}/>
      </View>
    );
};

export default App;
  
