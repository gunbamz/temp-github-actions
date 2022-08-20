//https://blog.logrocket.com/javascript-iterators-and-generators-a-complete-guide/

const userNamesGroupedByLocation = {
    Tokio: [
      'Aiko',
      'Chizu',
      'Fushigi',
    ],
    'Buenos Aires': [
      'Santiago',
      'Valentina',
      'Lola',
    ],
    'Saint Petersburg': [
      'Sonja',
      'Dunja',
      'Iwan',
      'Tanja',
    ],
  };

  userNamesGroupedByLocation[Symbol.iterator] = function() {
    return {
      next: () => {
        return {
          done: true,
          value: 'hi',
        };
      },
    };
  }

  // Calling the iterator function returns the iterator object
const iterator = userNamesGroupedByLocation[Symbol.iterator]();
console.log(iterator.next().value);
// "hi"

const cityKeys = Object.keys(this);
let cityIndex = 0;
let userIndex = 0;


//We can use this data to change the return value now
return {
    next: () => {
      const users = this[cityKeys[cityIndex]];
      const user = users[userIndex];
  
      return {
        done: false,
        value: user,        
      };
    },
  };