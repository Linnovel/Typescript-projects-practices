"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join()}`;
    };
    const superman = fullName('luis', 'linares', 'novellino');
    console.log(superman);
})();
