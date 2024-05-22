(() => {

    interface Hero  {
        name:string;
        age?:number;
        power:string[];
        superPower?:() =>string;
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power:['Super velocidad', 'Viajar en el tiempo'],
    }


    let superman:Hero = {
        name: 'Barry Allen',
        age: 24,
        power:['Super velocidad', 'Viajar en el tiempo'],
        superPower():string{
            return this.name
        }
    }

    
    



})()