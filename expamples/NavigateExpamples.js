import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignInScreen } from '../src/screens/SignInScreen';
import { PersonScreen } from '../src/screens/PersonScreen';

const Stack = createNativeStackNavigator();

export const NavigateExpamples = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PersonScreen" component={PersonScreen} />
        <Stack.Screen name="Auth" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}