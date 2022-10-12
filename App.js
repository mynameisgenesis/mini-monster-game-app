import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function selectedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  let screen = <StartGameScreen />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.rootScreen}
    >
      <StartGameScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    // opacity: 0.5,
  },
});
