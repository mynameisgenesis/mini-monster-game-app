import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: Colors.primary,
    elevation: 4, //Adds shadow to Android
    shadowColor: Colors.black, //Property for iOS
    shadowOffset: { width: 0, height: 2 }, //Property for iOS
    shadowRadius: 6, //Property for iOS
    shadowOpacity: 0.25, //Property for iOS
    justifyContent: "center",
    alignItems: "center",
  },
});
