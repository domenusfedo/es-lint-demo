/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const airbnbRulesTest = () => {
  /*
   Section 1 : 'Types'
  */
  const foo = 1;
  let bar = foo;

  bar = 9;

  console.log(foo, bar); // => 1, 9

  const foo2 = [1, 2];
  const bar2 = foo2;

  bar2[0] = 9;

  console.log(foo2[0], bar2[0]); // => 9, 9

  /*
   Section 2 : 'References'
  */
  const a = 1;
  console.log(a);

  if (a === 1) {
    const testVariable = 'Test';
    console.log(testVariable);
  }

  // Now value found! // console.log(testVariable);

  /*
   Section 3 : 'Objects'
  */
  // eslint-disable-next-line no-new-object
  const badItem = new Object();
  const goodItem = {};

  function getKey(k: any) {
    return `a key named ${k}`;
  }

  const badObj = {
    id: 5,
    name: 'San Francisco',
  };

  // @ts-ignore
  badObj[getKey('enabled')] = true;

  const goodObj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };

  console.log('bad', badObj);
  console.log('good', goodObj);

  const badAtom = {
    value: 1,

    // eslint-disable-next-line func-names, object-shorthand
    addValue: function (value: any) {
      return badAtom.value + value;
    },
  };

  const goodAtom = {
    value: 1,

    addValue(value: any) {
      return goodAtom.value + value;
    },
  };

  const lukeSkywalker = 'Luke Skywalker';
  const anakinSkywalker = 'Anakin Skywalker';

  const badObj2 = {
    // eslint-disable-next-line object-shorthand
    lukeSkywalker: lukeSkywalker, // Bad!
  };

  const goodObj2 = {
    lukeSkywalker,
  };

  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };

  // eslint-disable-next-line no-prototype-builtins
  console.log(obj.hasOwnProperty('lukeSkywalker')); // Bad

  const has = Object.prototype.hasOwnProperty;
  console.log(has.call(obj, 'lukeSkywalker'));

  const arrayLikeObject = {
    0: 'a', // indexed element
    1: 'b', // indexed element
    2: 'c', // indexed element
    3: 'd', // indexed element
    length: 4, // length property
  };

  console.log(arrayLikeObject);

  // ✅ Using Array.from
  const idk = Array.from(arrayLikeObject);
  console.log(idk);

  const arr = [1, 69, 3, 4];
  const [first, second] = arr;

  console.log(second);

  // Invalid!
  // if (lukeSkywalker === 'Luke Skywalker') {
  //   function testar() {
  //     console.log('Nope.');
  //   }
  // }

  let testarrrpw;
  if (lukeSkywalker === 'Luke Skywalker') {
    testarrrpw = () => {
      console.log('Yup.');
    };
  }

  const concatenateAll = (...args: string[]) => args.join('');

  console.log(concatenateAll('baranki', 'boze'));
};
