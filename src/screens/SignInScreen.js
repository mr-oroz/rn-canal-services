import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { AppButton } from "../components/ui/app-button";
import { THEME } from '../theme';
import { Context } from "../context/context";
const width = Dimensions.get('window').width

export const SignInScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const { onSignIn } = useContext(Context)

  const handlerPress = () => {
    if (userName === 'Username' && password === 'Password') {
      navigation.navigate('PersonScreen')
      onSignIn(userName)
      setErrorMessage(null)
    } else {
      setErrorMessage('invalid password or login!')
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.auth}>
        <Text style={styles.title}>Autorization</Text>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.text}>login</Text>
            <TextInput
              onChangeText={setUserName}
              value={userName}
              style={styles.input} />
          </View>
          <View style={styles.formControl}>
          <Text style={styles.text}>password</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.input} />
          </View>
        </View>
        <Text style={{ color: 'red', fontSize: 18 }}>{errorMessage}</Text>
        <View style={styles.btn}>
          <AppButton
            onPress={handlerPress}
            color={THEME.GREAM}>
            Submit
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  auth: {
    width: width > 440 ? width / 2 : 290,
    height: 333,
    borderWidth: 5,
    borderColor: '#27569C',
    borderStyle: 'solid',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  form: {
    width: '100%',
    marginTop: 20,
  },
  formControl: {
    flexDirection: width > 440 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#27569C',
    fontWeight: "800",
  },
  text: {
    fontSize: 24,
    fontWeight: '800'
  },
  input: {
    marginTop: 10,
    borderColor: '#27569C',
    borderWidth: 4,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    height: width > 440 ? 45 : 39,
    paddingLeft: 10,
    width: '70%'
  },
  btn: {
    width: "100%",
    marginTop: 20,
    alignItems: 'center'
  }
})
