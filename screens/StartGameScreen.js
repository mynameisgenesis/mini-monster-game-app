import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    marginTop: 100,
    backgroundColor: '#FFD6EC',
    elevation: 4, //Adds shadow to Android
    shadowColor: '#000000', //Property for iOS
    shadowOffset: { width: 0, height: 2 }, //Property for iOS
    shadowRadius: 6, //Property for iOS
    shadowOpacity: 0.25, //Property for iOS
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#FFA1CF',
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
  },
});