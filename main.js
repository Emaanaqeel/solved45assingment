"use strict";
/*45 Cars: Write a function that stores information about a car in a Object. The function
 should always receive a manufacturer and a model name. It should then accept an arbitrary
  number of keyword arguments. Call the function with the required information and two
  other name-value pairs, such as a color or an optional feature. Print the Object that’s
  returned to make sure all the information was stored correctly.*/
function createcar(manifacturer, model, optional) {
    return Object.assign({ manifacturer,
        model }, optional);
}
const mycar = createcar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
