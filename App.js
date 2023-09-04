import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';
/* view is the equivalent of div
safe area view is to avoid notches and holepunches 
when using images from their address, you have to specify their dimensions */


const App = () => {

  return (
    <View style={styles.container}>
      <UpcomingWeather />
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