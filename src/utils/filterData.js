const FilterData = (filterKey, dataSet) => {
  const newDataSet = dataSet.filter(
    (data) => data.name.includes(filterKey) || data.number.includes(filterKey)
  );
  return newDataSet;
};
export default FilterData;
