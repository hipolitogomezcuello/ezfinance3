import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import TypeKeyboard from './components/TypeKeyboard';
import colors from './colors';
import Display from './components/Display';
import LegalToggle from './components/LegalToggle'
import { useState } from 'react';
const apiUrl = 'https://ezfinance2.herokuapp.com/api/stuff'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  inputContainer: {
    backgroundColor: 'red',
  }
});
const addCost = async (value, type, blanco) => {
  let url = `${apiUrl}?payment=${value}&type=${type}&legal=${blanco ? 'tudoLegal' : 'sus'}`
  try {
    await fetch(url)
  } catch(err){
    alert('Oopsie woopsie')
  }
}

export default function App() {
  const [totalValue, setTotalValue] = useState('')
  const [selectedType, setSelectedType] = useState('app')
  const [blanco, setBlanco] = useState(false)
  const onButtonPress = async (value) => {
    if (value === 'S') {
      if (totalValue === '') {
        alert('Fuck you')
        return
      }
      setTotalValue('')
      await addCost(totalValue, selectedType, blanco)
    } else if (value === 'D') {
      setTotalValue(totalValue.slice(0, -1))
    } else {
      setTotalValue(`${totalValue}${value}`)
    }
  }

  return (
    <View style={styles.container}>
      <LegalToggle blanco={blanco} setBlanco={setBlanco}/>
      <Display value={totalValue}/>
      <Keyboard onButtonPress={onButtonPress}/>
      <TypeKeyboard selectedType={selectedType} onSelect={type => setSelectedType(type)} />
    </View>
  );
}
