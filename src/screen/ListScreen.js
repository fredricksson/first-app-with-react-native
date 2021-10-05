import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'freddricksson 2' },
        { name: 'freddricksson 2'},
        { name: 'freddricksson 3'},
        { name: 'freddricksson 4'},
        { name: 'freddricksson 6'},
        { name: 'freddricksson 5'},
    ]
    return <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friends} 
                renderItem={ ( { item } )=> {
        return <Text style={styles.textStyle}> {item.name} </Text>
    }}/>
}

const styles = StyleSheet.create({
    textStyle: { 
        marginVertical: 50
    }
})

export default ListScreen