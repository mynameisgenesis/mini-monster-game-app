import React from "react";
// import { create, act } from "react-test-renderer";
import StartGameScreen from "../StartGameScreen";
import {
  render,
  screen,
  fireEvent,
  cleanup,
} from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("StartGameScreen", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<StartGameScreen selectedNumberHandler={jest.fn()} />))
      .toMatchSnapshot;
//   });
//   test("input is cleared when reset button clicked ", () => {
//     const mockFunction = jest.fn();
//     render(<StartGameScreen selectedNumberHandler={mockFunction} />);
//     fireEvent(screen.findByTestId("user-number-input"), "onChangeText", "55");
//     expect(mockFunction).toHaveBeenCalledWith("55");
//   });
// });

// test("input is cleared when reset button pressed ", () => {
//   const userNumberInputField = tree.root.findByProps({
//     testID: "user-number-input",
//   });
//   expect(userNumberInputField).toBeDefined();
//   // userNumberInputField.value = 4;
//   const resetButton = tree.root.findByProps({ testID: "reset-button" }).props;
//   act(() => resetButton.onPress());
//   console.log(resetButton);
//   expect(userNumberInputField.value).toEqual("");
// });
