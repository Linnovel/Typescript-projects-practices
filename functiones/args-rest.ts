(() => {

    const fullName = (firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join()}`
    }

    const superman = fullName('luis', 'linares','novellino')

    console.log(superman);
    
})()