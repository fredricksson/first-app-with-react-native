import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'freddricksson 2' , age: 12},
        { name: 'freddricksson 2' , age: 12},
        { name: 'freddricksson 3' , age: 12},
        { name: 'freddricksson 4' , age: 12},
        { name: 'freddricksson 6' , age: 12},
        { name: 'freddricksson 5' , age: 12},
    ]
    /*return <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friends} 
                renderItem={ ( { item } )=> {
        return <Text style={styles.textStyle}> {item.name} </Text>
    }}/>*/
    return <FlatList
            data={friends}
            renderItem={ ({item}) => {
                return <Text> {item.name} - {item.age} </Text>
            }}
    />
}

const styles = StyleSheet.create({
    textStyle: { 
        marginVertical: 50
    }
})

export default ListScreen