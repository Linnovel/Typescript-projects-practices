(() => {


    class Avenger {
        name;
        power;


        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor() {
            super()
            this.flying = true
        }
    }


    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvenger('Falcon', 10)
    console.log(hulk);
    console.log(falcon);


})()