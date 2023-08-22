import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
/* view is the equivalent of div
safe area view is to avoid notches and holepunches 
when using images from their address, you have to specify their dimensions */


const App = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
      <View styles={styles.container}>
        <Text style={styles.location}>London</Text>
        <Text>6</Text>
        <Text>Feels like 5</Text>

      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({ // stylesheets are made as objects
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  location: {
    fontSize: 20,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
