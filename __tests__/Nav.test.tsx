import { Nav } from "/Users/jennywaller/Documents/degree-project/app/_components/Nav";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("check id header", () => {
  it("should render nav", () => {
    const { getByTestId } = render(
      <Nav
        menuOpenClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        navigation={[]}
        linkText={""}
        href={""}
        signoutAdmin={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const navElement = getByTestId("nav-component");
    expect(navElement).toBeInTheDocument();
  });
});
