console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const preMovie = async () =>{
    const wifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ticket')
        },3000)
    })

    const getPopcorn = new Promise((resolve,reject)=> resolve('Popcorn'))
    const addbutter = new Promise((resolve,reject)=>resolve('Butter'))
    const getDrink = new Promise((resolve,reject)=> resolve('Cold-Drink'))

    const ticket = await wifeBringingTicket;
    console.log('wife : here are the tickets');
    console.log('husband : we should go in');
    console.log('wife : I am hungry');
    console.log('husband : I will get something to eat');
    const popcorn = await getPopcorn;
    console.log('husband : I got you some popcorn')
    console.log('wife : I want butter on popcorn');
    console.log('husband : okay')
    const butter = await addbutter;
    console.log('husband : here you go')
    console.log('husband : let me also get some drinks')
    const drink = await getDrink;
    console.log('wife : lets go in')

    return `person3 : shows ${ticket} ${popcorn} ${butter} ${drink}`



}

preMovie().then((m)=>{
    console.log(m)
})

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');