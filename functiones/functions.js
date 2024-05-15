"use strict";
(() => {
    const hero = 'batman';
    function returnName() {
        return hero;
    }
    const returnHero = () => {
        return 'Bati señal';
    };
    console.log(typeof returnHero);
})();
