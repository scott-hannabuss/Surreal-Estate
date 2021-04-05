import React from "react";
import { render } from "@testing-library/react";
import SideBar from "../components/Properties";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar", () => {
  it("renders sidebar as expected", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders a filter by city header", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  const cityHeader = getByTestId("test-filter-by-city-header");
  expect(cityHeader).toBeTruthy();
});

it("renders a filter by price header", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  const priceHeader = getByTestId("test-filter-by-price-header");
  expect(priceHeader).toBeTruthy();
});
