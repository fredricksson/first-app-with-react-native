import React from 'react'
import { Text, StyleSheet, View } from 'react-native'




const ComponentsSreen = () => {
    const name = 'fred'
    return (
        <View>
            <Text style={styles.textStyle}> This is the component Scren </Text>
            <Text> {name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsSreen