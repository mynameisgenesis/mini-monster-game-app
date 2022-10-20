import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, startNewGameHandler }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/game-over.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={startNewGameHandler}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  summaryText: {
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    opacity: 0.75,
    fontFamily: "CaviarDreams",
    fontSize: 28,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "CaviarDreams-Bold",
  },
});
