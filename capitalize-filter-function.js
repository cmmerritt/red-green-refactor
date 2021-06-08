export default function capitalizeAndFilter(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substr(1);
  }
  for(let i = 0; i < array.length; i++) {
    if(array[i][0] === 'F') {
      array.splice(i, 1);
    }
  }
  return array;
}
