import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    return (
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen