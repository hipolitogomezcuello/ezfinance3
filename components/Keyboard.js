import { StyleSheet, Text, View } from "react-native"
import KeyboardButton from "./KeyboardButton";

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    justifyContent: 'space-between',
    flex: 1
  }
})

const Keyboard = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.row}>
          <KeyboardButton value='7' onPress={() => onButtonPress(7)} />
          <KeyboardButton value='8' onPress={() => onButtonPress(8)} />
          <KeyboardButton value='9' onPress={() => onButtonPress(9)} />
        </View>
        <View style={styles.row}>
          <KeyboardButton value='4' onPress={() => onButtonPress(4)} />
          <KeyboardButton value='5' onPress={() => onButtonPress(5)} />
          <KeyboardButton value='6' onPress={() => onButtonPress(6)} />
        </View>
        <View style={styles.row}>
          <KeyboardButton value='1' onPress={() => onButtonPress(1)} />
          <KeyboardButton value='2' onPress={() => onButtonPress(2)} />
          <KeyboardButton value='3' onPress={() => onButtonPress(3)} />
        </View>
        <View style={styles.row}>
          <KeyboardButton value='S' onPress={() => onButtonPress('S')} />
          <KeyboardButton value='0' onPress={() => onButtonPress(0)} />
          <KeyboardButton value='D' onPress={() => onButtonPress('D')} />
        </View>
      </View>
    </View>
  )
}

export default Keyboard;