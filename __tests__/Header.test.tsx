import { render } from "@testing-library/react";
import { Header } from "/Users/jennywaller/Documents/degree-project/app/_components/Header";

import "@testing-library/jest-dom";
import { AppRouterContextProviderMock } from "/Users/jennywaller/Documents/degree-project/__mocks__/app-router-context-provider-mock";

describe("check id header", () => {
  it("should render data-id header", () => {
    const push = jest.fn();
    const { getByTestId } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <Header />
      </AppRouterContextProviderMock>
    );

    const headerElement = getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
});
