import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { State } from './src/context/state';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {MainScreen} from './src/screens/MainScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.root}>
      <State>
        <MainScreen onLayout={onLayoutRootView}/>
      </State>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})