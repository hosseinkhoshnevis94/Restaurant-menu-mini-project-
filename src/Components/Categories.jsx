import React, { useState } from "react";

const Categories = ({ items, clickHandler }) => {
  const [mainCategory, setMainCategory] = useState("all");
  return (
    <div className="btn-container">
      {items.map((category) => (
        <button
          key={category}
          type="button"
          className={` ${
            mainCategory === category ? "filter-btn highlight" : "filter-btn"
          }`}
          onClick={() => {
            setMainCategory(category); clickHandler(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
