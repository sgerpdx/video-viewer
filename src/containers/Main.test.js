import React from "react";
import { render } from "@testing-library/react-native";
// importing of component to test:
import MainScreen from "./MainScreen";

// this basic test based on docs at: https://callstack.github.io/react-native-testing-library/docs/api/

test("should display selection text", () => {
  const { getByText } = render(<MainScreen />);
  const element = getByText("Select video source:");
});
