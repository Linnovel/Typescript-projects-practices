"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
        superPower() {
            return this.name;
        }
    };
})();
(() => {
    // class Mutant implements Xmen, Human {
    //     public age:number;
    //     public name:string
    //     public realName: string;
    //     mutantPower(id:number)  {
    //         return this.age + '' + this.realName
    //     }
    // }
})();
(() => {
    const client = {
        name: 'Luis Linares',
        age: 35,
        address: {
            id: 123,
            zip: '12312',
            city: 'Caracas'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Mellisa',
        age: 30,
        address: {
            city: 'adaw',
            zip: 'awd',
            id: 32
        },
        getFullAddress() {
            return this.age;
        },
    };
})();
(() => {
    ;
    let addNumbersFunctions;
    addNumbersFunctions = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map