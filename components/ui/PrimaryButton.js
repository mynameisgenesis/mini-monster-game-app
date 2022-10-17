import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#FF5EA5" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#FF74B1",
    paddingVertical: 8,
    paddingHorizontal: 8,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});