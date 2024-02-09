/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Page from "/Users/jennywaller/Documents/degree-project/app/jenny-testar/Page";

it("renders homepage unchanged", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
