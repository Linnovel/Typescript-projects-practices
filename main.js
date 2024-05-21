"use strict";
(() => {
    //destructuring de objetos
    const avengers = {
        nick: 'samuel j',
        ironMan: 'Robert D',
        vision: 'paul Bettany',
        activos: true,
        poder: 1500
    };
    // const {nick, poder, vision} = avengers;
    // console.log({nick, poder}, vision.toUpperCase());
    // const printAvegners = ({nick, ...rest}:Avengers) => {
    //     console.log(nick, rest);
    // }
    // printAvegners(avengers)
    //!destructurarion de arrays
    const avengersArr = ['Cap', 'IronMan', 'Hulk'];
    const [first, , third] = avengersArr;
    // console.log(first, third);
})();
(() => {
    const ironman = {
        nombre: 'Tony startk',
        weapong: 'Armor Suit'
    };
    const capAmerica = {
        nombre: 'Capitan America',
        weapong: 'Shield'
    };
    const thor = {
        nombre: 'Thor',
        weapong: 'Hammer'
    };
    const avengers = [ironman, capAmerica, thor];
    for (const iterator of avengers) {
        console.log(iterator.nombre, iterator.weapong);
    }
})();
(() => {
    const nombre = 'Luis';
    const getName = () => {
        console.log('nombre viejo');
    };
    // getName = () => {console.log('nombre nuevo');
    // }
    // getName()
})();
//# sourceMappingURL=main.js.map