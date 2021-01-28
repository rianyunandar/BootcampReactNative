import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class SignUpPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <Image source={require('./image/sanberProtofolio.png')} style={{width: 375, height: 102, marginTop: 63}} />
          <Text style={styles.formTitle}>Register</Text>
          <View style={styles.form}>
          <TouchableOpacity>
            <Text style={styles.formLabel}>Username</Text>
            </TouchableOpacity>
            <View style={styles.formInput}></View>
          <TouchableOpacity>
            <Text style={styles.formLabel}>Email</Text>
          </TouchableOpacity>
            <View style={styles.formInput}></View>
          <TouchableOpacity>
            <Text style={styles.formLabel}>Password</Text>
          </TouchableOpacity>
            <View style={styles.formInput}></View>
          <TouchableOpacity>
            <Text style={styles.formLabel}>Ulangi Password</Text>
          </TouchableOpacity>
            <View style={styles.formInput}></View>
          </View>
          <TouchableOpacity style={styles.registerBox}>
            <Text style={{fontSize: 24, fontFamily: 'Roboto', color: 'white'}}>Daftar?</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 24, fontFamily: 'Roboto', color: '#3EC6FF', marginTop: 16, marginBottom: 16}}>atau</Text>
          <TouchableOpacity style={styles.loginBox}>
            <Text style={{fontSize: 24, fontFamily: 'Roboto', color: 'white'}}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Roboto'
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  formTitle: {
    fontSize: 24,
    color: '#003366',
    textAlign: 'center',
    marginTop: 70
  },

  form: {
    marginTop: 40,
    marginBottom: 32,
    marginLeft: 41,
    marginRight: 40,
  },

  formLabel: {
    fontSize: 16,
    fontFamily: 'Roboto',
    marginBottom: 4
  },

  formInput: {
    borderColor: '#003366',
    backgroundColor: 'white',
    height: 48,
    width: 294,
    borderWidth: 1,
    marginBottom: 16
  },

  loginBox: {
    width: 140,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#3EC6FF'
  },

  registerBox: {
    width: 140,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#003366'
  },
});