fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        collection2 = [...collection];
        collection2.forEach(item => {
        callback(item);
        })
      } else {
        collection2 = {...collection};
        const keys = Object.keys(collection2);
        const values = Object.values(collection2);
        values.forEach(value => callback(value));
        }
        return collection;
    },

    map: function(collection, callback) {
      const newArray = [];
      if (Array.isArray(collection)){
        collection2 = [...collection];
        collection2.forEach(function(item) {
          return newArray.push(callback(item));
        });
      } else {
        collection2 = {...collection};
        const values = Object.values(collection2);
        values.forEach(function(item) {
          return newArray.push(callback(item));
        });
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      console.log(collection);
      console.log(callback);
      console.log(acc);
      collection.forEach(function(item){
        acc = acc || 0;
        acc = callback(acc, item, collection);

      })
      return acc;
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
