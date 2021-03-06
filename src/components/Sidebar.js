import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
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
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString(
      "query",
      {
        title: { $regex: query },
      },
      search
    );
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar_links">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <h3>Filter By City</h3>
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
        <h3>Filter by Price</h3>
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
