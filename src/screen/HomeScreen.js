import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    return( 
        <View>
            <Text>Hi im there</Text>
            <Button 
                onPress={ () => props.navigation.navigate('List') }
                title="Go to components Demo"
            />
            <TouchableOpacity onPress={ () => props.navigation.navigate('demo') }>
                <Text>go to list Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomeScreen