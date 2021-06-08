import { getName } from './functions';

const spot = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

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
