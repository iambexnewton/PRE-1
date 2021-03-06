// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

const modulo = (a, b) => a % b;

const squareRoot = (n) => Math.sqrt(n);

const raiseToPower = (m, n) => Math.pow(m, n);

const formatMoney = (amount) => `£${amount.toFixed(2)}`;

const calculateCircleArea = (r) => parseFloat((r * r * Math.PI).toFixed(3));

const calculateFullTurns = (degrees) => Math.floor(degrees / 360);
// return the number of full turns you can make with the provided degrees
// 1 full turn === 360 degrees

const getLength = (str) => str.length;

const putNamesTogether = (firstName, lastName) => `${firstName} ${lastName}`;

const capitaliseString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const dontShoutSentence = (SENTENCE) => {
  var first = SENTENCE.charAt(0).toUpperCase();
  var rest = SENTENCE.slice(1).toLowerCase();

  return first + rest;
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
};

const getMiddle = (str) => {
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
  // return the middle (or middle two) character(s) of the passed string
};

const getLastWord = (words) => words.split(' ').splice(-1)[0];
// return the last word of a sentence
// you can assume words doesn't have a period at the end

const hyphenateWords = (words) => words.replace(/\s/g, '-');
// return the passed string with the spaces replaced by hyphens ("-")
// s for string g for spaces

const convertToCamelCase = (words) => {
  let camelWords = words
    .split(' ')
    .map((words) => words.trim())
    .map((words) => words[0].toUpperCase() + words.substring(1))
    .join();

  let newCamel =
    camelWords[0].toLowerCase() + camelWords.substring(1).replace(/,/g, '');

  return newCamel;
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
};

function areValuesEqual(left, right) {
  if (left === right) {
    return true;
  } else {
    return false;
    // return true if the passed arguments are strictly equal
  }
}

function areValuesNotEqual(left, right) {
  if (left !== right) {
    return true;
  } else {
    return false;
    // return true if the passed arguments are NOT equal
  }
}

function isFromThe60s(year) {
  if (year > 1959 && year <= 1969) {
    return true;
  } else {
    return false;
  }
}
// return true if the year is in the 1960's

function isEvenLength(string) {
  if (string.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// return true if string has an even length

function areStringsEqualCaseInsensitive(left, right) {
  if (left.toLowerCase() === right.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

const getEvenNumbers = (nums) => nums.filter((num) => num % 2 === 0);
//return an array of only the even numbers in the given array

const getItemsLongerThan = (array, len) =>
  array.filter((arr) => arr.length > len);
//return an array of only the items longer than the given length

const getLastItems = (array, n) => array.slice(Math.max(array.length - n));
// return an array with the 'n' last items of 'array'

function getSandwichFilling(sandwich) {
  var popped = sandwich.pop();
  var shifted = sandwich.shift();
  return sandwich;
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

function removeItem(array, n) {
  let newArray = [...array];
  if (n != -1) {
    newArray.splice(n, 1);
  }
  return newArray;
}

// return a new array without the item on position 'n', effectively removing it from the array

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// return a new array with all the elements of arr1 followed by all the elements of arr2

function flattenArrayByOne(arrayOfArrays) {
  return arrayOfArrays.flat(1);
  // given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  // for example:
  // [[1],[2],[[3,4]]] => [1,2,[3,4]] TEST
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays
}

function isOver40(user) {
  if (user.age > 40) {
    return true;
  } else {
    return false;
  }
}
/*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */

function getUserAge(user) {
  let today = new Date().getFullYear();
  return today - user.yearOfBirth;
  //munus the birth year of user
  //pasrse int the result to get a number

  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
}

const getUserPetAge = (user) => user.pet.age;
/*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */

function createProduct() {
  const Bread = {
    type: 'Tiger',
    price: 3.0,
    amount: 1,
    /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */
  };
  return Bread;
}
function addPriceToProduct(product, price) {
  product.price = price;

  return product;
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
}

function getPropertyOfProduct(product, property) {
  return product[property];
  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
}

function addPropertyToProduct(product, property, value) {
  product[property] = value;
  return product;
}

/* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */

function createNorthcoder(name, yearOfBirth) {
  let Northcoder = {
    name: name,
    age: 2019 - yearOfBirth,
    language: 'JavaScript',

    // return an object with:
    // a name property set to the value of the name parameter
    // an age property set to whatever the age of the northcoder would be in the year 2019
    // a language property set to 'JavaScript'
  };
  return Northcoder;
}

function updateVoterAddress(voter, correctHouseNumber) {
  voter.address.houseNumber = correctHouseNumber;
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
}

function createUserString(userObj) {
  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.
}

function getNorthcodersNames(northcoders) {
  const namesArray = [];

  northcoders.map((northcoderName) => {
    namesArray.push(northcoderName.name);
  });
  return namesArray;
}
// should take an array of objects with the format from createNorthcoder
// returns an array of the users' names as strings

function getAlbumProperties(obj) {
  return Object.keys(obj);
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
}

function deleteManyPasswords(users) {
  users.map((value) => delete value.password);

  return users;
  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
}

function countTheObjects(arr) {
  return arr.filter((item) => !Array.isArray(item) && item !== null).length;

  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects,
};
