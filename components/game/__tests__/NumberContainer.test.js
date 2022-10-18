import React from "react";
import NumberContainer from "../NumberContainer";
import { render, cleanup } from "@testing-library/react-native";

jest.useFakeTimers();
jest.runAllTimers();

describe("NumberContainer", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    expect(render(<NumberContainer />)).toMatchSnapshot;
  });
});
