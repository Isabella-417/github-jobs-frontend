import React from "react";

export const FilterOptions = (props) => {
  const options = props.options;

  return options.map((option) => {
    return (
      <div className="mt-2" key={option}>
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2">{option}</span>
      </div>
    );
  });
};

export const FilterComponent = (props) => {
  const { title, posibilities } = props.filters;

  return (
    <div className="block py-5 px-10">
      <span className="text-lg font-bold text-gray-700">{title}</span>
      <FilterOptions options={posibilities} />
    </div>
  );
};
