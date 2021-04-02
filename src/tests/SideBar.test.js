import React from "react";
import { render } from "@testing-library/react";
import SideBar from "../components/Properties";

describe("Sidebar", () => {
  it("renders sidebar as expected", () => {
    const { asFragment } = render(<SideBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders a filter by city header", () => {
  const { getByTestId } = render(<SideBar />);
  const cityHeader = getByTestId("test-filter-by-city-header");
  expect(cityHeader).toBeTruthy();
});

it("renders a filter by price header", () => {
  const { getByTestId } = render(<SideBar />);
  const priceHeader = getByTestId("test-filter-by-price-header");
  expect(priceHeader).toBeTruthy();
});
