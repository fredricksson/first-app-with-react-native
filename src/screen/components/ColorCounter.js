import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ( { color, onIncrease, onDecrease } ) => {


    return (<View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase  ${color}`}/>
        <Button OnPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>)
}

const styles = StyleSheet.create({


})

export default ColorCounter