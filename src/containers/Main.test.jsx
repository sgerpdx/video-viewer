import React from "react";

// the following suggested by https://jestjs.io/docs/tutorial-react-native but npm fails:
//import renderer from "react-test-renderer";

import { render, screen, waitFor } from "@testing-library/react";
// import { MemoryRouter, Route } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// importing of component to test:
import MainScreen from "./MainScreen";

describe("MainScreen video container component", () => {
  it("displays a dropdown menu for source selection", async () => {
    render(<MainScreen />);

    // const loading = await screen.getByText("Loading...");
    // expect(loading).toMatchSnapshot();
    const dropdownMenu = await screen.getByText("Select video source:");
    expect(dropdownMenu).toMatchSnapshot();

    // add a return waitFor once mock is set up
  });
});
