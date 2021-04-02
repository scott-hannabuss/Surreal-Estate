import { render, screen } from "@testing-library/react";
import NavBar from "../components/App";

test("renders navbar", () => {
  render(<NavBar />);
  expect(screen.getByText(/View Properties/i)).toBeInTheDocument();
});

it("renders a view property link", () => {
  const { getByTestId } = render(<NavBar />);
  const viewPropertiesLink = getByTestId("test-view-properties-link");
  expect(viewPropertiesLink).toBeTruthy();
});

it("renders an add property link", () => {
  const { getByTestId } = render(<NavBar />);
  const addPropertiesLink = getByTestId("test-add-properties-link");
  expect(addPropertiesLink).toBeTruthy();
});
