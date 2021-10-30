import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { it } from "jest-circus";
// import { MemoryRouter, Route } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

describe("MainScreen video container component", () => {
  it("displays a dropdown menu for source selection", async () => {
    const loading = await screen.getByText("Loading...");
    expect(loading).toMatchSnapshot();
    const dropdownMenu = await screen.getByText("Please select video source:");
    expect(dropdownMenu).toMatchSnapshot();

    // add a return waitFor once mock is set up
  });
});
