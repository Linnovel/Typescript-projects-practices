"use strict";
(() => {
    const myName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis', 'linares', true);
    console.log({ name });
})();
