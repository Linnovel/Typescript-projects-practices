"use strict";
(() => {
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
// Funciones Básicas
const sumar = (a, b) => a + b;
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
// const msg = 'Hola mundo'
// console.log(msg)
// const a :number = 10;
// let b: number = 10;
//any Caulquier cosa;
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let SuperHeros;
    (function (SuperHeros) {
        SuperHeros[SuperHeros["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        SuperHeros[SuperHeros["fuerzaBatman"] = 1] = "fuerzaBatman";
        SuperHeros[SuperHeros["fuerzaFlash"] = 2] = "fuerzaFlash";
        SuperHeros[SuperHeros["fuerzaSuperman"] = 3] = "fuerzaSuperman";
    })(SuperHeros || (SuperHeros = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    console.log('let');
})();
(() => {
    const myName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis', 'linares', true);
    console.log({ name });
})();
(() => {
    const myName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis');
    console.log({ name });
})();
(() => {
    const myName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis', 'Linares');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join()}`;
    };
    const superman = fullName('luis', 'linares', 'novellino');
    console.log(superman);
})();
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
(() => {
    const hero = 'batman';
    function returnName() {
        return hero;
    }
    const returnHero = () => {
        return 'Bati señal';
    };
    console.log(typeof returnHero);
})();
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
    };
})();
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
    let myCustomVariable = 'Luis';
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Iron Man';
    exist = 1231231;
    //tipo de casteo
    console.log(avenger.charAt(0));
    avenger: 12312312.101;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 5, 5, 5,];
    const villains = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villains.forEach(v => console.log(v.toUpperCase()));
    numbers.forEach(v => console.log(v));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
    console.log({ AudioLevel });
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('ayiuda');
    console.log('hola');
});
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('estamos jodios');
    }
    else {
        console.log('no, no estan jodios');
    }
})();
(() => {
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Volcan Negro`;
    // console.log(`yo soy ${batman}`.toLocaleUpperCase());
    // console.log(batman.toLocaleUpperCase());
})();
(() => {
    const hero = ['Dr Strange', 100];
    console.log({ hero });
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => { };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map