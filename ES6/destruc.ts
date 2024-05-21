(() => {

    type Avengers = {
        nick:string;
        ironMan:string;
        vision:string;
        activos: boolean;
        poder:number
    }

    //destructuring de objetos
    const avengers:Avengers = {
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

    const avengersArr:string[] = ['Cap', 'IronMan', 'Hulk'];

    const [first, , third] = avengersArr
    // console.log(first, third);
    

    

})()