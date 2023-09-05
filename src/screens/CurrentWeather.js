import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

/* view is the equivalent of div
safe area view is to avoid notches and holepunches 
when using images from their address, you have to specify their dimensions */


const CurrentWeather = () => {

    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <Text style={styles.location}>London</Text>
                <Feather name="sun" size={24} color="white" />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8</Text>
                    <Text style={styles.highLow}>Low: 5</Text>
                </View>
                <View style={styles.bodyWrapper}>
                    <Text style={styles.description}>It's sunny</Text>
                    <Text style={styles.message}>It's perfect t-shirt weather</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ // stylesheets are made as objects
    wrapper: {
        flex: 1,
        backgroundColor: 'black',
    },

    container: {
        flex: 1,
        alignItems: 'center'
    },

    location: {
        fontSize: 50, // dimensions in react native are without units
        color: 'white'
    },

    temp: {
        fontSize: 45,
        color: 'white'
    },

    feels: {
        color: 'white',
        fontSize: 20,
    },

    highLow: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10
    },

    highLowWrapper: {
        flexDirection: 'row'
    },

    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 50,
    },

    description: {
        color: 'lightgrey',
    },

    message: {
        color: 'lightgrey'
    }

})

export default CurrentWeather;
