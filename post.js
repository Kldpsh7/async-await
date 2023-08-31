let posts=[{title:'POST1'}];

let lastUserActivityTime=new Date().toLocaleString();

console.log('Last activity time = '+lastUserActivityTime)


const userAct = async ()=>{
    const updateLastSeen = new Promise((resolve,reject)=>{
        setTimeout(() => {
            lastUserActivityTime=new Date().toLocaleString()
            resolve()
        }, 1000);
    })

    const createPost = new Promise ((resolve,reject)=>{
        posts.push({title:'POST2'})
        resolve()
    })

    const deletePost = new Promise((resolve,reject)=>{
        posts.pop()
        resolve()
    })


    await Promise.all([updateLastSeen,createPost,deletePost])
    
}

userAct().then(()=>console.log(lastUserActivityTime,posts))