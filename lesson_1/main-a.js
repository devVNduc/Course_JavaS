let users = [
    {
        id: 1,
        name: "Toan",
    },
    {
<<<<<<< HEAD
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
=======
        id: 2,
        name: "Dat",
    },
    {
        id: 3,
        name: "Duc",
    },
    //...
];
let comments = [
    {
        id: 1,
        user_id: 3,
        content: 'Ngay mai chung ta hoc mon gi?'
>>>>>>> 7379a3605da958edec4fe7480fe1c5433aec2d01
    },
    {
        id: 2,
        user_id: 1,
<<<<<<< HEAD
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
=======
        content: 'Chung ta se hoc mon Javascript'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Vay chung ta hoc o phong may dung khong'
    },
    {
        id: 4,
        user_id: 2,
        content: 'Dung roi do'
    },
    {
        id: 5,
        user_id: 2,
        content: 'Mai kiem tra nua nhe!!!'
    },
];
//fake api
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments)
        })
        
    })
}
function getUserByIds(usersId) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            let result = users.filter(function (users) {
                return usersId.includes(users.id);
            })
            resolve(result)
>>>>>>> 7379a3605da958edec4fe7480fe1c5433aec2d01
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
<<<<<<< HEAD
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
=======
getUserByIds([1,2,3])
    .then(function (result) {
        console.log(result)
    })
getComments()
    .then(function () {
        let usersId = comments.map(function () {
            return comments.user_id;
        })
        return getUserByIds(usersId)
            .then(function () {
                return {
                    USERS: users,
                    COMMENTS: comments
                }
            })
    })
    .then(function (data) {
        console.log(data)
    })
    // .then(function (data) {
    //     console.log("", data)
    //     let displaytHTML = document.getElementById("name_comments")
    //     let htmls = ''
    //     data.COMMENTS.forEach(function (COMMENTS) {
    //         let result = data.USERS.find(function (USERS) {
    //             return USERS.id === COMMENTS.user_id;
    //         })
    //         console.log("", result)
    //         htmls += `<li>${result.name}: ${COMMENTS.content}</li>`
    //     })
    //     displaytHTML.innerHTML = htmls
    // })
    
    


   
// let promise123 = new Promise(function (resolve, reject) {
>>>>>>> 7379a3605da958edec4fe7480fe1c5433aec2d01
//     resolve()

// })
// promise123
//     .then(function () {
<<<<<<< HEAD
//         console.log('Success')   
=======
//         console.log('Success')
//         return new Promise(function (resolve, reject) {
//             reject()
//         })
>>>>>>> 7379a3605da958edec4fe7480fe1c5433aec2d01
//     })
//     .catch(function () {
//         console.log("Error");
//     })
//     .finally(function () {
//         console.log('done')
//     })