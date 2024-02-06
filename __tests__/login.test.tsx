import { render, screen } from "@testing-library/react";
import Login from "/Users/jennywaller/Documents/degree-project/app/login/page";

import "@testing-library/jest-dom";
import { AppRouterContextProviderMock } from "/Users/jennywaller/Documents/degree-project/__mocks__/app-router-context-provider-mock";

describe("Login Form", () => {
  it("should have required fields and submit button", () => {
    const push = jest.fn();
    render(
      // <AppRouterContextProviderMock router={{ push }}>
      <Login />
      // </AppRouterContextProviderMock>
    );

    const emailField = screen.getByLabelText("Epost");
    const passwordField = screen.getByLabelText("Lösenord");
    const submitButton = screen.getByRole("button");

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
