(() => {

    class Avenger {
        constructor(
            public name:string, 
            public realName:string
        ) {
            // console.log('constructor Avenger llamado!')
        }
        //method o function method
        private getFullName(){
            return `${this.name} ${this.realName}`
        }
    }
    class Xmen extends Avenger {

        get fullName(){
            return `${this.name} ${this.realName}`
        }

        set fullName(name:string){
            if(name.length < 3 ){
                throw new Error(' el nombre debe ser mayor de tres')
            }
            this.name = name;
        }
    }

    
    
    const wolwerine = new Xmen('Logan', 'Xmen')
    // console.log(wolwerine.fullName);

    wolwerine.fullName = 'Luis';

    // console.log(wolwerine.fullName);
    
    
    
})()