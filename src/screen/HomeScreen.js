import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
    return( 
        <View>
            <Text>Hi im there</Text>
            <Button 
                onPress={ () => console.log('presed')}
                title="Go to components Demo"
            />
            <TouchableOpacity onPress={ () => console.log('presed list')}>
                <Text>go to list Demo</Text>
                <Text>go to list Demo</Text>
                <Text>go to list Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen