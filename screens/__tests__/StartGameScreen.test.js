import React from "react";
import TestRenderer from "react-test-renderer";
import StartGameScreen from "../StartGameScreen";

test("renders correctly", () => {
  const tree = TestRenderer.create(<StartGameScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
