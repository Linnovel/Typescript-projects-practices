(() => {
    const myName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName}`
    }

    const name = myName('Luis')
    console.log({name});
    
    
})()