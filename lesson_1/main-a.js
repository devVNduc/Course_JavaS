//xuat ra man hinh ten va comment
let users = [
    {
        id: 1,
        name: "Toan",
    },
    {
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
    },
    {
        id: 2,
        user_id: 1,
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
        },1000)
    })
}
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
//     resolve()

// })
// promise123
//     .then(function () {
//         console.log('Success')
//         return new Promise(function (resolve, reject) {
//             reject()
//         })
//     })
//     .catch(function () {
//         console.log("Error");
//     })
//     .finally(function () {
//         console.log('done')
//     })