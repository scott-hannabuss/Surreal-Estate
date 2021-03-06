import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SideBar.css";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_links">
        <h3>Filter By City</h3>
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          Manchester
        </Link>
        <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          Sheffield
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          Liverpool
        </Link>
        <h3>Filter by Price</h3>
        <Link to={buildQueryString("sort", { price: -1 })}>
          Price Descending
        </Link>
        <Link to={buildQueryString("sort", { price: +1 })}>
          Price Ascending
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
