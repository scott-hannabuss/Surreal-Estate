import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  const validProps = {
    title: "Mansion",
    propertyId: "",
    userId: "1234",
    myProperties: [],
    favouriteId: "",
    type: "detached",
    bedrooms: 5,
    bathrooms: 3,
    price: 250000,
    city: "Liverpool",
    email: "brucewayne@hotmail.com",
    onSaveProperty: () => {},
    userID: "1234",
    key: "1234",
  };

  describe("Property Card renders items based on props", () => {
    beforeEach(() => render(<PropertyCard {...validProps} />));

    test("title", () => {
      expect(screen.getByText(/Mansion/i)).toBeInTheDocument();
    });
    test("type", () => {
      expect(screen.getByText(/detached/)).toBeInTheDocument();
    });
    test("price", () => {
      expect(screen.getByText(/250000/)).toBeInTheDocument();
    });

    test("city", () => {
      expect(screen.getByText(/Liverpool/i)).toBeInTheDocument();
    });
  });
});
