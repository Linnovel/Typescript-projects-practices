// Crear interfaces

interface Batimovil {
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villain {
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason:Villain = {
  reir: true,
  comer:true,
  llorar:false
}


const reir = ( guason:Villain ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface GothamFunc {
  (ciudadanos:string[]):number;
}

const ciudadGotica: GothamFunc = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Class {
  name:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void
}




/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Class {
   name:'luis';
   edad:35;
   sexo: 'Masculino';
   estadoCivil: string;
  imprimirBio(): void {
  console.log(`${this.name} is ${this.sexo} y tiene ${this.edad} y es ${this.estadoCivil}`);
      
  }
}