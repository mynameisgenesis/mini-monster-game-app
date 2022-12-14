import React from "react";
import StartGameScreen from "../StartGameScreen";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("StartGameScreen", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<StartGameScreen selectedNumberHandler={jest.fn()} />))
      .toMatchSnapshot;
  });
});
