import React from "react";
// import { create, act } from "react-test-renderer";
import GameOverScreen from "../GameOverScreen";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("GameOverScreen", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<GameOverScreen />)).toMatchSnapshot;
  });
});
