(()=>{

    type Avengers = {
        nombre:string;
        weapong:string;
    };

    const ironman: Avengers = {
        nombre: 'Tony startk',
        weapong: 'Armor Suit'
    }

    const capAmerica: Avengers = {
        nombre: 'Capitan America',
        weapong: 'Shield'
    }
    const thor: Avengers = {
        nombre: 'Thor',
        weapong: 'Hammer'
    }

    const avengers:Avengers[] = [ironman, capAmerica, thor];

    for (const iterator of avengers) {
        console.log(iterator.nombre, iterator.weapong);
    } 



})()