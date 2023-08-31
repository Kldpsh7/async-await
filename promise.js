console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const wifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn = wifeBringingTicket.then((t)=>{
    console.log('wife : here are the tickets');
    console.log('husband : we should go in');
    console.log('wife : I am hungry');
    console.log('husband : I will get something to eat');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Husband : Here, have some popcorn')
            resolve(`popcorn ${t}`)
        },3000)
    })
})

const getButter=getPopcorn.then((t)=>{
    console.log('wife : I want butter on popcorn');
    console.log('husband : okay')
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('husband : here you go')
            resolve(`butter ${t}`)
        }, 3000);
    })
})

const getDrink=getButter.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`Cold-Drink ${t}`)
    })
})

getDrink.then((t)=>{
    console.log(`person3 : shows ${t}`)
})

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');