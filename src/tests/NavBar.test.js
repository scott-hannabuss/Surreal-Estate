import { render, screen } from "@testing-library/react";
import NavBar from "../components/App";
import { BrowserRouter } from "react-router-dom";

test("renders navbar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/View Properties/i)).toBeInTheDocument();
});

it("renders a view property link", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const viewPropertiesLink = getByTestId("test-view-properties-link");
  expect(viewPropertiesLink).toBeTruthy();
});

it("renders an add property link", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const addPropertiesLink = getByTestId("test-add-properties-link");
  expect(addPropertiesLink).toBeTruthy();
});
