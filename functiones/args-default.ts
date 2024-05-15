(() => {
    const myName = (firstName:string, lastName?:string, upper:boolean=false):string => {
        return `${firstName} ${lastName}`
    }

    const name = myName('Luis', 'linares', true)
    console.log({name});
    
    
})()