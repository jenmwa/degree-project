import { Footer } from "/Users/jennywaller/Documents/degree-project/app/_components/Footer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("footer", () => {
  it("should render footer", () => {
    const { getByTitle } = render(<Footer />);

    const svg1 = getByTitle("Facebook");
    const svg2 = getByTitle("Instagram");

    expect(svg1).toBeInTheDocument();
    expect(svg2).toBeInTheDocument();
  });
});
