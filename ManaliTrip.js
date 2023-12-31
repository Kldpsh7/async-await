
let trip=async ()=>{
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
    
    let [car,place,journey]=await Promise.all([buyCar(),planTrip(),travel()])

    return `${car}\n${place}\n${journey}`
}
trip().then((val)=>console.log(val))