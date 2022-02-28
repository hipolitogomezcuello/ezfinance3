import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
  text: {
    color: 'white',
    fontSize: 60,
  }
})

const Display = ({ value }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>${value}</Text>
    </View>
  )
}

export default Display;