let posts=[{title:'POST1'}];

let lastUserActivityTime=new Date().toLocaleString();

console.log('Last activity time = '+lastUserActivityTime)


const userAct = async ()=>{
    function updateLastSeen(){
        return new Promise((resolve,reject)=>{
            lastUserActivityTime=new Date().toLocaleString()
            console.log('updated last activity time = '+lastUserActivityTime)
               resolve()
        })
    
    }
    function createPost() {
        return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                console.log('Adding post')
                posts.push({title:'POST2'})
                resolve()
            }, 1000);
        })
    }

    function deletePost() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log('Deleting Post')
                posts.pop()
                resolve()
            }, 1000);
        })
    }

    function getposts(){
        return new Promise((resolve,reject)=>{
            posts.forEach((post)=>console.log(post.title))
            resolve()
        })
    }


   
    await Promise.all([updateLastSeen(),createPost(),getposts(),deletePost(),updateLastSeen(),getposts()])
}

userAct().then(()=>console.log(lastUserActivityTime,posts))