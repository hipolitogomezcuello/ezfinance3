import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import TypeKeyboard from './components/TypeKeyboard';
import colors from './colors';
import Display from './components/Display';
import LegalToggle from './components/LegalToggle'
import { useEffect, useState } from 'react';
import ResponseOkLabel from './components/ResponseOkLabel';
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
  console.log(url)
  try {
    const response = await fetch(url)
    return response
  } catch(err){
    alert('Oopsie woopsie')
  }
}

const timeLabel = (setter) => {
  setter(true)
  setTimeout(() => setter(false), 3000)
}

export default function App() {
  const [totalValue, setTotalValue] = useState('')
  const [selectedType, setSelectedType] = useState('app')
  const [blanco, setBlanco] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [showErrorLabel, setShowErrorLabel] = useState(false)

  useEffect(() => {
    fetch(`${apiUrl}/ready-up`)
  }, [])
  
  const onButtonPress = async (value) => {
    if (value === 'S') {
      if (totalValue === '') {
        alert('Fuck you')
        return
      }
      setTotalValue('')
      const response = await addCost(totalValue, selectedType, blanco)
      if (response.ok) {
        timeLabel(setShowLabel)
      } else {
        timeLabel(setShowErrorLabel)
      }
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
      <ResponseOkLabel showLabel={showLabel} showErrorLabel={showErrorLabel} />
    </View>
  );
}
