"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let SuperHeros;
    (function (SuperHeros) {
        SuperHeros[SuperHeros["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        SuperHeros[SuperHeros["fuerzaBatman"] = 1] = "fuerzaBatman";
        SuperHeros[SuperHeros["fuerzaFlash"] = 2] = "fuerzaFlash";
        SuperHeros[SuperHeros["fuerzaSuperman"] = 3] = "fuerzaSuperman";
    })(SuperHeros || (SuperHeros = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
