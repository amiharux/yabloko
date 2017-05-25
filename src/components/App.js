import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App  = () => (
  <View style={styles.container}>
    <Text>Foo bar!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C97BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
