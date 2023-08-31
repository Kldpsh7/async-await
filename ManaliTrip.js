function buyCar(cb){
    setTimeout(() => {
        console.log('bought a car');
        cb();
    }, 5000);
}

function planTrip(cb){
    setTimeout(() => {
        console.log('Lets go to manali');
        cb();
    }, 3000);
}

function travel(){
    setTimeout(() => {
        console.log('Reached manali')
    }, 2000);
}

buyCar(()=>planTrip(()=>travel()))