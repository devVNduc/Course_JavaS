
/* lam viec voi mang
1. to string (chuyen 1 array sang string)
2.join (them ky tu giua cac phan tu)
3. pop (xoa phan tu bat dau tu cuoi mang tro di)
4. push (them phan tu vao cuoi mang)
5. shift (xoa phan tu bat dau tu dau mang)
6. unshift (them phan tu vao dau mang)
7. splicing (cat lay phan tu chi dinh,them phan tu vao vi tri chi dinh)
8. concat (noi chuoi)
9. slicing (cat phan tu o vi tri chi dinh va lay cac phan tu da cat, khong the them phan tu)
*/



//OBJECT

/*var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    getName: function() {
        return myInfo.name;
    }
};
myInfo['my-email'] = 'Trongducstvn@gmail.com';
var mykey = 'address'
console.log(myInfo[mykey])
console.log(myInfo['my-email'])
console.log(myInfo.getName())
*/

//Object constructor

function User(firstName, LastName, avatar) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.LastName}`
    }
}
var user = new User('Duc','Nguyen','Avatar');
var user2 = new User('Dat','Nguyen','Avatar');
User.prototype.className = 'f8'
user.title = 'Chia se'
user2.comment = 'okeoke'
console.log(user)
console.log(user2)
//
// Làm bài tại đây
function Student(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
// Ví dụ khi sử dụng
//date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(year)
// console.log(month)
// console.log(day)
//
// function getNextYear() {
//     return new Date().getFullYear() + 1;
// }
// console.log(getNextYear())
//
/*function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
};
var parrot = new Animal('parrot',2,'30')
console.log(parrot)
*/
/*
math object
- Math.PI
- Math.round() lam tron so 
- Math.abs() 
- Math.ceil() lam tron tren 
- Math.floor() lam tron duoi
- Math.random() tra ve so thap phan nho hon 1
- Math.min() lay so lon nhay
- Math.max() lay so nho nhat

*/
// var result = [
//     1,
//     2,
//     3
// ]

// function getRandomItem(array) {
//     if (!Array.isArray(array)) return false;
//     var random = Math.floor(Math.random() * array.length);
//     return array[random];
// }

// console.log(getRandomItem(result))

// cau lệnh rẽ nhanh 
// function run(a) {
//     if(a % 3 == 0){
//         return 1
//     }
    
//     if(a % 5 == 0){
//         return 2
//     }
//     if(a % 15 == 0){
//         return 3
//     }

// }


// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3


var course = {
    name: 'Javascript',
    coin: 250
}
// Làm bài
function getCanVoteMessage(age) {
    return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
}



// Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

//vong lap

//for loop
function getRandNumbers(min,max,length) {
    var array = [];
    for(var i = 0; i <= length; i++){
        array.push(Math.floor(Math.random() * (max - min) + min))
    }
    return array
}
console.log(getRandNumbers(1,100,10))
//
// function getTotal(arr) {
//     var sum = 0 
//     for(var i = 0;i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(getTotal([1,2,3]))
//
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
console.log(typeof orders)
var orderLength = orders.length;
var sum  = 0
function getTotal(orders) {
    for(var i = 0; i < orderLength; i++){
        sum+=orders[i].price;
    }
    return sum;
}
console.log(getTotal(orders))

//for/in loop
function run(object) {
    var array = []
    for(var key in object){
        var a = `Thuộc tính ${key} có giá trị ${object[key]}`
        array.push(a)
    }
    return array
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
var myInfo = {
    name: 'Trong Duc',
    age: 18,
};
function run1(object) {
    var array = []
    for(var key in object){
        var b = `Thuộc tính ${key} có giá trị ${object[key]}`
        array.push(b)
    }
    return array
}
console.log(run1(myInfo));
// while loop
var i = 0;
var isSuccess = false;
do {
    i++
    console.log('Nạp thẻ lần ' + i);
    if(false){
        isSuccess = true;
    }
} while (!isSuccess && i <= 3)
// continue break
//đệ quy
var array = ['a','b','c','d']
console.log([...(new Set(array))]);
//
/*
    array methods
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/
