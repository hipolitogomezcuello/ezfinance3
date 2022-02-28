import { StyleSheet, Text, View } from "react-native"
import KeyboardButton from "./KeyboardButton";
import TypeButton from "./TypeButton";

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    justifyContent: 'space-between',
    flex: 1
  }
})

const TypeKeyboard = ({ selectedType, onSelect }) => {
  return(
    <View style={styles.container}>
      <TypeButton selected={selectedType === 'app'} text='app' onPress={() => onSelect('app')} />
      <TypeButton selected={selectedType === 'comida'} text='salidas' onPress={() => onSelect('comida')} />
      <TypeButton selected={selectedType === 'viveres'} text='viveres' onPress={() => onSelect('viveres')} />
      <TypeButton selected={selectedType === 'steam'} text='steam' onPress={() => onSelect('steam')} />
    </View>
  )
}

export default TypeKeyboard