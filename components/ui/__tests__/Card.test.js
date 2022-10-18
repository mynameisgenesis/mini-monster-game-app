import React from "react";
import Card from "../Card";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("Card", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<Card />)).toMatchSnapshot;
  });
});
