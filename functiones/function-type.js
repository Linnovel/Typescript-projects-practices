"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const saludarGreet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    //! myFunction = 10;
    //! console.log(myFunction);
    // myFunction =addNumbers;
    // console.log(myFunction(1,2));
    // myFunction =saludarGreet;
    // console.log(myFunction('luis'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
