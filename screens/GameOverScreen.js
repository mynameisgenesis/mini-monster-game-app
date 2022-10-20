import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../utils/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/game-over.png")}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 5,
    borderColor: Colors.accent,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 36,
    padding: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
