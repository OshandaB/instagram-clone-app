import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
      />
      {loading ? (
        <>
          {/* <Text style={styles.loadingText}>Loading Instagram</Text> */}
          <ActivityIndicator size="large" color="#3897f0" />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Username, email or mobile number"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Find your account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create new account</Text>
          </TouchableOpacity>
          <Text style={styles.fromMeta}>from Meta</Text>
          <Image 
        source={require('../assets/images/metalogo.png')} 
        style={styles.fromMetaLogo} 
      />

        </>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  fromMetaLogo: {
    
    position:'absolute',
    bottom:0,
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#3897f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3897f0',
    marginBottom: 20,
    fontSize: 14,
  },
  createAccountButton: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3897f0',
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#3897f0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fromMeta: {
    paddingBottom:100,
   position:'absolute',
   bottom:0,
    color: '#aaa',
    marginTop: 20,
    fontSize: 14,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3897f0',
  },
});
