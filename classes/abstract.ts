(()=>{
   abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ){}
    }
        class Xmen extends Mutante {
            salvarMundo(){
                return 'todo en orden'
            }
        }
        class Villan extends Mutante {
            matarHumanos(){
                return 'matarlos a todos'
            }
        }

        const wolwerine = new Xmen('Wolwerine', 'Logan')
        const magneto = new Villan('MAgneto', 'Magnus')
        // console.log(wolwerine.salvarMundo());
        // console.log(magneto.matarHumanos());
        
})()