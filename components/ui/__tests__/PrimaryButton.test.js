import React from "react";
import PrimaryButton from "../PrimaryButton";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("PrimaryButton", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<PrimaryButton />)).toMatchSnapshot;
  });
});
