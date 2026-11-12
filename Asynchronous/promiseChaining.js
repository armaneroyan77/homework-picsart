function getUser(){
    return new Promise((resolve) => { setTimeout(() => {
        resolve({id: 1, Username: "Joe"})
    }, 1000)})
}

function getPosts(user){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`from ${user.Username}`);
            resolve({postInjo: "post"})
        }, 1000)
    })
}

function getComments(post){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`from ${post.postInjo}`);
            
            resolve({comment: "comment"})
        }, 1000)
    })
}


getUser()
.then(getPosts)
.then(getComments)
.then((comment) => {
    console.log(comment.comment);
    
})

