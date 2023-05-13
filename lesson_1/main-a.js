let users = [
    {
        id: 1,
        name: "Duc",
    },
    {
        id: 2,
        name: "Toan",
    },
    {
        id: 3,
        name: "Duong",
    },
    {
        id: 4,
        name: "Dat",
    },
]
let comments = [
    {
        id: 1,
        user_id: 4,
        content: " Ngay mai lop co kiem tra khong"
    },
    {
        id: 2,
        user_id: 1,
        content: "Co ngay mai kiem tra day"
    },
    {
        id: 3,
        user_id: 3,
        content: "Kiem tra mon gi the"
    },
    {
        id: 4,
        user_id: 2,
        content: "Kiem tra mon Java"
    },
]
function getComment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments)
        },1000)
     }
    )
}
function getUserByIds(usersId) {
    return new Promise(function (resolve) {
            let results = users.filter(function (users) {
                return usersId.includes(users.id)
            })
            resolve(results)
    })
}
getComment()
    .then(function (comment) {
        let usersId = comment.map(function (user) {
            return user.user_id
        })
        return getUserByIds(usersId)
            .then(function (data) {
                return {
                    USERS: users,
                    COMMENTS: comments,
                }
            })
    })
    .then(function (data) {
        let displayData = document.getElementById("data")
        let htmls = '';
        data.COMMENTS.forEach(function (COMMENTS) {
            let datas = data.USERS.find(function (USERS) {
                return USERS.id === COMMENTS.user_id
            })
            console.log(datas)
            htmls += `<li>${datas.name}: ${COMMENTS.content}</li>`
        })
        displayData.innerHTML = htmls
    })
var postsAPI = "https://jsonplaceholder.typicode.com/posts";
fetch(postsAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var htmls = data.map(function (infor) {
            return `<li>
            <h1>${infor.title}</h1>    
            <span>${infor.body}</span>    
            </li>`
        })
        var html = htmls.join(" ")
        document.getElementById("data2").innerHTML = html
    })


// let promise123 = new Promise(function (resolve, reject) {
//     reject()
//     resolve()

// })
// promise123
//     .then(function () {
//         console.log('Success')   
//     })
//     .catch(function () {
//         console.log("Error");
//     })
//     .finally(function () {
//         console.log('done')
//     })