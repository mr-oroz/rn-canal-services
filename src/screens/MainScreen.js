import React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigateExpamples} from '../../expamples/NavigateExpamples';


export const MainScreen = ({onLayout}) => {
  return (
    <View style={styles.root} onLayout={onLayout}>
      <NavigateExpamples/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
