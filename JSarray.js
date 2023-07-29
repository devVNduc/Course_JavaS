// PHẦN 1:ARRAY METHOD CƠ BẢN
// Bài 1:
var data2 = [1, 1, 3, 4, 4, 5, 6, 7, 9]
data2.push(8)
data2.push(10)
data2.unshift(5)
data2[5] = 11
data2.splice(4, 1, 2, 5)
console.log(data2)

// Bai 2:
var data03 = ['Cam', 'Xoài', 'Mít', 'Bưởi', 'Dưa gang', 'Quýt']
var data03p2 = data03
console.log(data03p2)
var indexFind
var data03b2 = data03.findIndex(function name(params) {
    return params == "Dưa gang"
})
console.log(data03b2)
data03.splice(data03b2, 1,"Dưa hấu")
console.log(data03p2)

var data03Length = data03.length
console.log(data03Length)
data03.splice((data03Length / 2), 0, 'Mận')
data03.unshift("Dứa")
data03.push("Chanh")
console.log(data03)

// Bai 3
const persons = [
    { firstname: "Đào", lastname: "Văn Anh" },
    { firstname: "Trần", lastname: "Huy" },
    { firstname: "Lê", lastname: "Hoàng" }
]; 

var newPersons = []
newPersons.push({ firstname: 'Nguyen', lastname: "Thu Ha" },
    { firstname: 'Nguyen', lastname: "Trong Duc" },
    { firstname: 'Dinh', lastname: "Van Nam" },
    { firstname: "Trần", lastname: "Huy" }
)
console.log(newPersons)
var firstname = "Trần"
var lastname = "Huy"
newPersons.filter(function name(params) {
    if (params.firstname === firstname && params.lastname === lastname) {
        params.firstname = "Nguyễn"
        params.lastname = "Hoàng"
    }
})
newPersons.map(function (person) {
    person.address = "Ha Noi"
})
console.log(newPersons)

// Bai 4
var sumNumber = 0;
var arr2 = ['4', '6', 1, 2, 3, 5, 'y', 't', 5]
var arrayNumber = arr2.filter(function (a) {
    if (typeof a === "number") {
        return a
    }
})
var sumResult = arrayNumber.reduce(function (currentReusult, index) {
    currentReusult += index
    return currentReusult
}, 0)
console.log(sumResult)

// Bai 5
var list1 = [3, 6, 7, 9, 5]
var list2 = [3, 5, 7, 8, 6, 6, 7]
var list3 = list1.concat(list2)
console.log(list3)
var sumList3 = list3.reduce(function (currentReusult, index) {
    currentReusult += index
    return currentReusult
}, 0)
console.log(sumList3)
var sortList3 = list3.sort(function (a, b) {
    if (a > b) return -1
    if (a < b) return 1
    if (a == b) return 0
})
console.log(sortList3)

// bai 6
console.log("Bai 6")
var data = [1, 9,2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 9]
var duplicates = []
for (let x = 0; x < data.length; x++) {
    for (let y = x + 1; y < data.length; y++) {
        if ((data[x] == data[y]) && !duplicates.includes(data[x])) {
            duplicates.push(data[x])
        }
    }
}
console.log(duplicates)
