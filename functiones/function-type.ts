(() => {

    const addNumbers = (a:number, b:number) => a + b;
    const saludarGreet = (name:string) => `Hola ${name}`;
    const saveTheWorld =() => `El mundo esta salvado`;

    let myFunction: () => string;

    //! myFunction = 10;
    //! console.log(myFunction);

    // myFunction =addNumbers;
    // console.log(myFunction(1,2));
    
    // myFunction =saludarGreet;
    // console.log(myFunction('luis'));

    myFunction =saveTheWorld;
    console.log(myFunction())

})()