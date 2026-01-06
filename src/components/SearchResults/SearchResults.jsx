import React from "react";
import { useLocation } from "react-router-dom";
import allProducts from "../assets/all_product";
import Item from "../Items/Item";

const containerStyle = {
  minHeight: "100vh",
  padding: "2rem 1.5rem",
  background: "linear-gradient(180deg, #fafafa, #ffffff)",
};

const headingStyle = {
  fontSize: "1.6rem",
  fontWeight: 500,
  marginBottom: "1.5rem",
  letterSpacing: "0.5px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.5rem",
};

const emptyTextStyle = {
  fontSize: "1rem",
  opacity: 0.6,
};

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Search Results for: <span style={{ opacity: 0.7 }}>"{query}"</span>
      </h1>

      <div style={gridStyle}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p style={emptyTextStyle}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
