// let users = [
//     {
//         id: 1,
//         name: "Toan",
//     },
//     {
//         id: 2,
//         name: "Dat",
//     },
//     {
//         id: 3,
//         name: "Duc",
//     },
//     //...
// ];
// let comments = [
//     {
//         id: 1,
//         user_id: 3,
//         content: 'Ngay mai chung ta hoc mon gi?'
//     },
//     {
//         id: 2,
//         user_id: 1,
//         content: 'Chung ta se hoc mon Javascript'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'Vay chung ta hoc o phong may dung khong'
//     },
//     {
//         id: 4,
//         user_id: 2,
//         content: 'Dung roi do'
//     },
//     {
//         id: 5,
//         user_id: 2,
//         content: 'Mai kiem tra nua nhe!!!'
//     },
// ];
// //fake api
// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments)
//         })
        
//     })
// }
// function getUserByIds(usersId) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             let result = users.filter(function (users) {
//                 return usersId.includes(users.id);
//             })
//             resolve(result)
//         },1000)
//      }
//     )
// }
// function getUserByIds(usersId) {
//     return new Promise(function (resolve) {
//             let results = users.filter(function (users) {
//                 return usersId.includes(users.id)
//             })
//             resolve(results)
//     })
// }
// getComment()
//     .then(function (comment) {
//         let usersId = comment.map(function (user) {
//             return user.user_id
//         })
//         return getUserByIds(usersId)
//             .then(function (data) {
//                 return {
//                     USERS: users,
//                     COMMENTS: comments,
//                 }
//             })
//     })
//     .then(function (data) {
//         let displayData = document.getElementById("data")
//         let htmls = '';
//         data.COMMENTS.forEach(function (COMMENTS) {
//             let datas = data.USERS.find(function (USERS) {
//                 return USERS.id === COMMENTS.user_id
//             })
//             console.log(datas)
//             htmls += `<li>${datas.name}: ${COMMENTS.content}</li>`
//         })
//         displayData.innerHTML = htmls
//     })
// let postsAPI = "https://jsonplaceholder.typicode.com/posts";
// fetch(postsAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let htmls = data.map(function (infor) {
//             return `<li>
//             <h1>${infor.title}</h1>
//             <span>${infor.body}</span>
//             </li>`
//         })
//         let html = htmls.join(" ")
//         document.getElementById("data2").innerHTML = html
//     })
// let courseAPI = "http://localhost:3000/course";
// fetch(courseAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     // .then(function (data) {
//     //     console.log(data)
//     // })
//     .then(function (data) {
//         let htmls = data.map(function (infor) {
//             return `
//             <li>
//             <h1>${infor.name}</h1>
//             <span>${infor.description}</span>
            
//             </li>
//             `
//         })
//         console.log(htmls);

//         let html = htmls.join(" ")
//         console.log(html);
//         // document.getElementById("data3").innerHTML = htmls
//     })

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
//
let listCoursesBlock = document.querySelector('list-courses');
let courseAPI = 'http://localhost:3000/course'
function start() {

}
start();
function getCourses(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(/* `callback` is a function that is passed as an argument to `getCourses` function. It is
        used to handle the data returned from the API after the fetch request is completed.
        The `callback` function is executed inside the `then` method of the fetch request, and
        it takes the response data as its argument. */
        callback)
}