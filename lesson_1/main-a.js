//xuat ra man hinh ten va comment
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
        name: "Dat",
    }
    //...
];
let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Ngay mai may gio di hoc'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ngay mai 8 gio di hoc'
    },
];
// 1. lay comment
// 2. tu comments lay ra user_id,
// 3. tu user_id lay ra user tuong ung

// fake API : mo phong ham goi qua url ma back end tra ve de lay duoc du lieu
function getComments() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(comments);
        },1000)
    })
}
// getComments()
//     .then(
//     (comments) => {
//             let userIds = comments.map(function (comment) {
//                 return comment.user_id;
//             })
//             console.log("", userIds);
//     }
// );
function getUsersByIds(userIds) {
    return new Promise(reject => {
        setTimeout(() => {
            let result = users.filter(function (userId) { 
                return userIds.includes(userId.id);
            });
            reject(result);
        },1000)
    })
}
getUsersByIds([4])
    // .then(function (users) {
    //     console.log("", users);
    // })
    .catch(function (users) {
        console.log("", users);
    })
let promise123 = new Promise(function (resolve, reject) {
    reject()
    resolve()

})
promise123
    .then(function () {
        console.log('Success')   
    })
    .catch(function () {
        console.log("Error");
    })
    .finally(function () {
        console.log('done')
    })