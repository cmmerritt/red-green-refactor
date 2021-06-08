export default function capitalizeAndFilter(array) {
  for(const string of array) {
    if(string[0].toUpperCase() === 'F') {
      array.splice(array.indexOf(string), 1);
    }
  }
  return array;
}
