"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'todo en orden';
        }
    }
    class Villan extends Mutante {
        matarHumanos() {
            return 'matarlos a todos';
        }
    }
    const wolwerine = new Xmen('Wolwerine', 'Logan');
    const magneto = new Villan('MAgneto', 'Magnus');
    // console.log(wolwerine.salvarMundo());
    // console.log(magneto.matarHumanos());
})();
(() => {
    class Avengers {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        //metodhs
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    const antman = new Avengers('Antman', 'cap', 'paul rudd');
    //  console.log(antman.bio());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('constructor Avenger llamado!')
        }
        //method o function method
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error(' el nombre debe ser mayor de tres');
            }
            this.name = name;
        }
    }
    const wolwerine = new Xmen('Logan', 'Xmen');
    // console.log(wolwerine.fullName);
    wolwerine.fullName = 'Luis';
    // console.log(wolwerine.fullName);
})();
(() => {
})();
//# sourceMappingURL=main.js.map