import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: 90,
    width: 90,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 48
  }
})

const KeyboardButton = ({ value, onPress}) => {
  const getColor = (value) => {
    let color;
    if (value === 'D') {
      color = colors.red
    } else if (value === 'S') {
      color = colors.green
    } else {
      color = colors.blue
    }
    return {
      backgroundColor: color,
    }
  }

  return (
    <TouchableOpacity style={{...styles.container, ...getColor(value)}} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

export default KeyboardButton;