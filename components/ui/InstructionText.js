import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent,
    fontSize: 24,
  },
});
