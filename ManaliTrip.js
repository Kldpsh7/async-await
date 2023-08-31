function buyCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('bought a car');
        }, 5000);
    })
}

function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Lets go to manali');
        }, 3000);
    })
}

function travel(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Reached manali')
        }, 2000);
    })
}

buyCar().then((val)=>{
    console.log(val);
    planTrip().then((val)=>{
        console.log(val)
        travel().then((val)=>{
            console.log(val)
        })
    })
})