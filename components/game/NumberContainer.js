import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: Colors.primary,
    padding: 24,
    borderRadius: 10,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: "bold",
  },
});
