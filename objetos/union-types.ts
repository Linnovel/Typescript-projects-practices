(() => {
    type Hero = {
        name:string;
        age?:number;
        power:string[];
        superPower?:() =>string;
    }

    let myCustomVariable: (string | number | Hero) ='Luis';
    console.log(myCustomVariable);
    
})()