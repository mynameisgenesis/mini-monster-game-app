import React from "react";
import GameScreen from "../GameScreen";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("GameScreen", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<GameScreen />)).toMatchSnapshot;
  });
});
