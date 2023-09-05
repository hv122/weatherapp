import React from "react"
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native"
import {Feather} from "@expo/vector-icons"

const City = () => {

    return (<SafeAreaView style={styles.container}>
        <ImageBackground style={styles.imageLayout} source={require("../../assets/city-background.jpg")}>
            <Text style={[styles.cityName, styles.locationText]}>London</Text>
            <Text style={[styles.countryName, styles.locationText]}>UK</Text>
            <View style={styles.populationWrapper}>
                <Feather name={'user'} size={50} color={'grey'}/>
                <Text style={styles.populationText}>100000</Text>
            </View>
            <View style={styles.riseSetWrapper}>
                <Feather name={'sunrise'} size={50} color={'grey'}/>
                <Text style={styles.riseSetText}>10:46:58am</Text>
                <Feather name={'sunset'} size={50} color={'grey'}/>
                <Text style={styles.riseSetText}>17:32:34pm</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>)
}


const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: 'black',
        marginTop: StatusBar.currentHeight || 0
    },

    imageLayout: {
        flex: 1,
    },

    locationText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },

    countryName: {
        fontSize: 30,
    },

    cityName: {
        fontSize: 40,
    },

    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: 'bold'
    },

    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },

    riseSetText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default City