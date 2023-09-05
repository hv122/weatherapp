import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
/* view is the equivalent of div
safe area view is to avoid notches and holepunches 
when using images from their address, you have to specify their dimensions */


const App = () => {

  return (
    <View style={styles.container}>
      <City/>
    </View>
  );
}

const styles = StyleSheet.create({ // stylesheets are made as objects
  wrapper: {
    flex: 1
  },
  
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;