import { StyleSheet, View, Text } from "react-native";
import Colors from "../../utils/colors";
export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>#{roundNumber}</Text>
      <Text style={styles.listText}>Opponent's Guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  listText: {
    fontFamily: "open-sans",
  },
});
