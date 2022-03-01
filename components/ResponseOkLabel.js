import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})

const ResponseOkLabel = ({ showLabel, showErrorLabel, setShowLabel, setShowErrorLabel }) => {

  const handlePress = () => {
    setShowLabel(false)
    setShowErrorLabel(false)
  }

  return(
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{ showLabel ? 'Todo OK!' : '' }</Text>
      <Text style={styles.text}>{ showErrorLabel ? 'Hubo un error!' : '' }</Text>
    </TouchableOpacity>
  )
}

export default ResponseOkLabel