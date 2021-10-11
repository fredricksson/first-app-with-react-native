import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ( { navigation }) => {
    return( 
        <View>
            <Text>Hi im there</Text>
            <Button 
                onPress={ () => navigation.navigate('List') }
                title="Go to List Demo"
            />
            <Button 
                onPress={ () => navigation.navigate('demo') }
                title="Go to components Demo"
            />
             <Button 
                onPress={ () => navigation.navigate('ImageScreen') }
                title="Go to Image Demo"
            />
             <Button 
                onPress={ () => navigation.navigate('counter') }
                title="Go to Counter Demo"
            />
             <Button 
                onPress={ () => navigation.navigate('colors') }
                title="Go to Color Demo"
            />
            <Button 
                onPress={ () => navigation.navigate('square') }
                title="Go to Square Demo"
            />
           <TouchableOpacity onPress={ () => navigation.navigate('demo') }>
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