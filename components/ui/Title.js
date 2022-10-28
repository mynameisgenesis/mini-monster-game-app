import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
