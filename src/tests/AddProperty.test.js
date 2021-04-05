import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

test("renders learn react link", () => {
  it("renders as expected", async () => {
    const { asFragment } = render(<AddProperty />);
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

it("renders a bathroom label", async () => {
  const { getByTestId } = render(<AddProperty />);
  const bathroomLabel = getByTestId("test-bathroom-label");
  await waitFor(() => {
    expect(bathroomLabel).toBeTruthy();
  });
});

it("renders a bedroom label", () => {
  const { getByTestId } = render(<AddProperty />);
  const bedroomLabel = getByTestId("test-bedroom-label");
  expect(bedroomLabel).toBeTruthy();
});
