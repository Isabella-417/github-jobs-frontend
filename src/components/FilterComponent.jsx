export const FilterOptions = ({ options, type, filterData }) => {
  const getCheckedOptions = (event, option) => {
    const obj = {};
    obj[type] = option;
    filterData(obj);
  };

  return options.map((option) => {
    return (
      <div className="mt-2" key={option}>
        <input
          type="checkbox"
          value={option}
          className="form-checkbox"
          onChange={(e) => getCheckedOptions(e, option)}
        />
        <span className="ml-2">{option}</span>
      </div>
    );
  });
};

export const FilterComponent = ({ filters, type, filterData }) => {
  const { title, posibilities } = filters;
  return (
    <div className="block py-5 px-10">
      <span className="text-lg font-bold text-gray-700">{title}</span>
      <FilterOptions
        options={posibilities}
        type={type}
        filterData={filterData}
      />
    </div>
  );
};
