(() => {
    const myName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`
    }

    const name = myName('Luis' , 'Linares')
    console.log({name});
    
    
})()