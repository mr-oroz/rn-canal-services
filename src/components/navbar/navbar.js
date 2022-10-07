import React, {useContext} from "react";
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../context/context";

export const Navbar = () => {
  const {onLogout} = useContext(Context)
  const navigation = useNavigation()
  const handlerPress = () => {
    onLogout()
    navigation.navigate('Auth')
  }
  return (
    <View style={styles.navbar}>
      <View>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View>
        <MaterialCommunityIcons
          onPress={handlerPress}
          name="logout-variant"
          size={51}
          color={THEME.BLUE_WATER} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 30,
    height: 118,
    backgroundColor: '#E4B062',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
})
