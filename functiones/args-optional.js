"use strict";
(() => {
    const myName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = myName('Luis');
    console.log({ name });
})();
