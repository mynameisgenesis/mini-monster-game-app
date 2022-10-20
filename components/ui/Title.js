import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontFamily: "Allenisa",
    fontSize: 45,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 12,
    borderRadius: 10,
  },
});
