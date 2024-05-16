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
