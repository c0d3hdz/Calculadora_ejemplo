import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
//StyleSheet : estilos  css.
//text : etiqueta para texto
// View: contenedor
//TouchableOpacity : boton con reaccion al tab
export default function App() {
    const [display, setDisplay] = useState('')
    const [result, setResult] = useState('')

    const handlePress = buttonValue => {
        if (buttonValue === '=') {
            // hace la operacion en base a lo que el Display tenga guardato (2+3 ejemplo)
            try {
                setResult(eval(display)) //muestra el resultado de evaluar el valor
            } catch (e) {
                setResult('Error')
            }
        } else if (buttonValue === 'C') {
            //limpia todos los valores si el valor de buttonValues es C
            setDisplay('')
            setResult('')
        } else {
            setDisplay(display + buttonValue) //se agrega el valor de cada button a la constante display
        }
    }

    const buttons = [
        // valor de cada uno de los buttons
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['C', '0', '+', '='],
    ]

    return (
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                {buttons.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map(buttonValue => (
                            <TouchableOpacity
                                key={buttonValue}
                                style={styles.button}
                                onPress={() => handlePress(buttonValue)}
                            >
                                <Text style={styles.buttonText}>{buttonValue}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    result: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#dcdcdc',
        width: '100%',
        padding: 20,
    },
    resultText: {
        fontSize: 48,
        fontWeight: '600',
        color: '#000',
    },
    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
    },
    displayText: {
        fontSize: 36,
        color: '#000',
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 100,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 32,
        color: '#000',
    },
})
