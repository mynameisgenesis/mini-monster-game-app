import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

function GreenScreen({ userNumber, gameOverHandler }) {
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("💢No lying!💢", "You know that this is wrong 😤!", [
        { text: "😔 Sorry", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            ➕
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            ➖
          </PrimaryButton>
        </View>
      </Card>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

export default GreenScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
