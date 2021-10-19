import React, { useReducer } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'



const reducer = (state, action) => {
    switch (action.type) {
       case 'increase' :
           return { ...state, counter: state.counter + action.payload}
        case 'decrease' :
            return { ...state, counter: state.counter + action.payload }
        
    }
}
const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
    <View>
        <Button title="Increase" onPress={() => {
            dispatch({type: 'increase', payload: 1})
        }
            }/>
        <Button title="Decrease"onPress={() =>  dispatch({type: 'increase', payload: -1})}/>
        <Text>Current Counter: {state.counter}  </Text>
    </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen