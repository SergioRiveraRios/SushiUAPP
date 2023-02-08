import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, useEffect } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation';
import AuthContextProvider from './src/contexts/AuthContext';


function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
