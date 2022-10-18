import React from "react";
import InstructionText from "../InstructionText";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("InstructionText", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<InstructionText />)).toMatchSnapshot;
  });
});
