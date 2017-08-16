let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Taylor'
    }
    setTimeout(() => {
        callback(user)
    }, 5000)
}

getUser(31, (user) => {
    console.log(user)
})