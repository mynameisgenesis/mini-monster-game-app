import React from "react";
import Title from "../Title";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("Title", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<Title />)).toMatchSnapshot;
  });
});
