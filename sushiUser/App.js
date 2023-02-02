import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,useEffect } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation';
import { Amplify, Analytics } from 'aws-amplify'
import config from '../sushiUser/src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import AuthContextProvider from './src/contexts/AuthContext';
import BasketContextProvider from './src/contexts/BasketContext';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
}
)

function App() {
  return (
    <NavigationContainer>
        <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default withAuthenticator(App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
