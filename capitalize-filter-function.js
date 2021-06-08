export default function capitalizeAndFilter(array) {
  const newArray = array.filter(string => (string[0].toUpperCase() !== 'F'));
  return newArray.map(string => string[0].toUpperCase() + string.substring(1));
}
