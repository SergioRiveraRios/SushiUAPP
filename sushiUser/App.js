import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation';
import { Amplify, Analytics } from 'aws-amplify'
import config from '../sushiUser/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
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