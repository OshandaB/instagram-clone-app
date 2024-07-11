import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
    // Add your login logic here
    setTimeout(() => {
      setLoading(false);
      // Navigate to the next screen or show an error
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand.png')} 
        style={styles.logo} 
      />
      {loading ? (
        <>
          <Text style={styles.loadingText}>Loading Instagram</Text>
          <ActivityIndicator size="large" color="#3897f0" />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Phone number, username or email address"
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
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgotten password?</Text>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.facebookButtonText}>Log in with Facebook</Text>
          </TouchableOpacity>
          <Text style={styles.signUp}>Don’t have an account? Sign Up</Text>
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
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
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
    marginBottom: 10,
  },
  or: {
    marginVertical: 10,
    color: '#aaa',
  },
  facebookButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  facebookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUp: {
    color: '#aaa',
    marginTop: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3897f0',
  },
});
