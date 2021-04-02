import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SideBar.css";
import qs from "qs";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };

  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: false,
  });
};

const SideBar = () => {
  const { search } = useLocation();

  return (
    <div className="sidebar">
      <ul className="sidebar_links">
        <h3 className="sidebar_header" datatest-id="test-filter-by-city-header">
          Filter By City
        </h3>
        <Link to={buildQueryString("query", { city: "Manchester" }, search)}>
          Manchester
        </Link>
        <Link to={(buildQueryString("query", { city: "Leeds" }), search)}>
          Leeds
        </Link>
        <Link to={buildQueryString("query", { city: "Sheffield" }, search)}>
          Sheffield
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" }, search)}>
          Liverpool
        </Link>
        <h3
          className="sidebar_header"
          datatest-id="test-filter-by-price-header"
        >
          Filter by Price
        </h3>
        <Link to={buildQueryString("sort", { price: -1 }, search)}>
          Price Descending
        </Link>
        <Link to={buildQueryString("sort", { price: +1 }, search)}>
          Price Ascending
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
