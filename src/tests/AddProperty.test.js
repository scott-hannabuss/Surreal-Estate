import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders a bathroom label", () => {
  const { getByTestId } = render(<AddProperty />);
  const bathroomLabel = getByTestId("test-bathroom-label");
  expect(bathroomLabel).toBeTruthy();
});

it("renders a bedroom label", () => {
  const { getByTestId } = render(<AddProperty />);
  const bedroomLabel = getByTestId("test-bedroom-label");
  expect(bedroomLabel).toBeTruthy();
});
