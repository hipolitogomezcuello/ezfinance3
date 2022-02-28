import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: 70,
    width: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12
  }
})

const TypeButton = ({ selected, onPress, text }) => {
  const getColor = (selected) => {
    const backgroundColor = selected ? colors.blue : 'gray' 
    return {
      backgroundColor
    }
  }

  return (
    <TouchableOpacity style={{...styles.container, ...getColor(selected)}} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TypeButton;