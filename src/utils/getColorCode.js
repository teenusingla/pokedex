import colorCode from '../data/colorsCode.json';

const getColorCode = (values) => {
  const colorsData = [];
  values.map((val) => {
    const type = val.type.name;
    // const data = { [type]: colorCode[type] };
    colorsData.push(colorCode[type]);
  });
  return colorsData;
};
export default getColorCode;
