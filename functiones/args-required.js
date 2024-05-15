"use strict";
(() => {
    const myName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis', 'Linares');
    console.log({ name });
})();
