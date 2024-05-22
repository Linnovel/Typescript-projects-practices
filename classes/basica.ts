(() => {

class Avengers {
    constructor (
        private name:string, 
        public team:string, 
        public realName:string ) 
        {}
        //metodhs
        bio(){
            return `${this.name} ${this.team}`
        }
}
const antman = new Avengers('Antman', 'cap', 'paul rudd');
//  console.log(antman.bio());
})()