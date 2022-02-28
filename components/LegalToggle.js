import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24
  }
})


const LegalToggle = ({ blanco, setBlanco }) => {

  return(
    <TouchableOpacity style={{...styles.container, ...{ backgroundColor: blanco ? 'white' : 'gray' }}} onPress={() => setBlanco(!blanco)}>
      <Text style={{ ...styles.text, ...{ color: blanco ? 'black' : 'white'}}}>{ blanco ? 'ANA' : 'SUS'}</Text>
    </TouchableOpacity>
  )
}

export default LegalToggle;