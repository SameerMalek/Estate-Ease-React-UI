import React, { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          onChange={handleChange}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          onChange={handleChange}
          placeholder="Max Price"
        />
        <Link
          to={`/list?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="button"
        >
          <img src="/search.png" alt="search" />
        </Link>
      </form>
    </div>
  );
}
