import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './components/ColorCounter'

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.type) {
        case 'change_red':
            // above we have something similar { red: 0, green: 0, blue: 0, red: state.red + action.amount}
            // it will overwrite the value of red
            return state.red + action.payload > 255 || state.red + action.payload < 0
             ? state
             : { ...state, red: state.red + action.payload }
        case 'change_green':
            // above we have something similar { red: 0, green: 0, blue: 0, green: state.green + action.payload}
            // it will overwrite the value of green
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }

        case 'change_blue':
            // above we have something similar { red: 0, green: 0, blue: 0, red: state.blue + action.payload}
            // it will overwrite the value of blue
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        
        default:
            return state

    }
};

const SquareScreen = () => {
    // dispatch can be anything like runMyReducer, but the convenction is dispatch
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    
    return (
        <View>
            <ColorCounter 
                onIncrease={ () => { 
                   dispatch({ type: 'change_red', payload: COLOR_INCREMENT})
                 }}
                onDecrease={ () => {
                    dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENT})
                } 
                    
                } 
                
                color='red'
            />
            <ColorCounter
                color="Blue"
                onIncrease={ () => {
                    dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})
                }} 
                onDecrease={ () => {
                    dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENT})
                }}
            />
            <ColorCounter
                color="Green"
                onIncrease={ () => dispatch({ type: 'change_green', payload: COLOR_INCREMENT}) } 
                onDecrease={ () => dispatch({ type: 'change_green', payload: -1*COLOR_INCREMENT}) }
             />
             <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green}, ${state.blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SquareScreen