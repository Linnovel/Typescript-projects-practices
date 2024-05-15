(() =>{

    const hero:string= 'batman'

    function returnName():string{
        return hero;
    }

    const returnHero = ():string => {
        return 'Bati señal';
    }

    console.log(typeof returnHero)
    
})()