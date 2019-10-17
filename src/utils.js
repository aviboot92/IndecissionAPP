console.log("I am in utils.js");

const square = (x) => x*x;
const add = (x,y) => x+y;
const subtract = (x,y) => x-y;

export {
    square,
    add,
    subtract as default
};