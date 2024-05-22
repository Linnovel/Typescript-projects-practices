(()=>{
    interface Client {
        name:string;
        age:number;
        address:Address,
        getFullAddress (id:string):void;
    }
    interface Address {
        id:number;
        zip:string;
        city:string;
    }
    const client:Client = {
        name: 'Luis Linares',
        age:35,
        address: {
            id:123,
            zip: '12312',
            city: 'Caracas'
        },
        getFullAddress(id:string) {
            return this.address.city
        },
    }
    const client2:Client = {
        name: 'Mellisa',
        age:30,
        address:{
            city:'adaw',
            zip:'awd',
            id: 32
        },
        getFullAddress() {
            return this.age;
        },
    }

})()