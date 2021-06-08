import getName from './name-function';
import copyAndPush from './copy-push-function';
import capitalizeAndFilter from './capitalize-filter-function';

const spot = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
const numbers = [1, 2, 3];
const stringArray = ['A', 'goodly', 'portly man,', 'i\'', 'faith, and a corpulent;', 'of a cheerful look, a pleasing eye, and a most noble carriage;', 'and, as I think, his age some', 'fifty, or, by\'r Lady,', 'inclining to threescore;', 'and now I remember me,', 'his name is', 'Falstaff'];

describe('returns name property of object', () => {
  it('returns name property spot of object spot', () => {
    const spotNameExpected = 'spot';
    const spotNameActual = getName(spot);
    expect(spotNameExpected).toEqual(spotNameActual);
  });
  it('returns name property Aang of object character', () => {
    const charNameExpected = 'Aang';
    const charNameActual = getName(character);
    expect(charNameExpected).toEqual(charNameActual);
  });
});

describe('returns new array', () => {
  it('returns new array with all items in original and new item pushed to end', () => {
    const arrayExpected = [1, 2, 3, 4];
    const arrayActual = copyAndPush(numbers, 4);
    expect(arrayActual).toEqual(arrayExpected);
  });
});

describe('returns original array unchanged', () => {
  it('make sure original array is unchanged', () => {
    const originalArrayExpected = [1, 2, 3];
    const originalArrayActual = numbers;
    expect(originalArrayActual).toEqual(originalArrayExpected);
  });
});

describe('capitalizes all strings and filters out F/f', () => {
  it('returns array with strings beginning with F/f filtered out', () => {
    const arrayExpected = ['A', 'goodly', 'portly man,', 'i\'', 'of a cheerful look, a pleasing eye, and a most noble carriage;', 'and, as I think, his age some', 'inclining to threescore;', 'and now I remember me,', 'his name is'];
    const arrayActual = capitalizeAndFilter(stringArray);
    expect(arrayActual).toEqual(arrayExpected);
  });
});
