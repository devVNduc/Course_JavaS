// PHẦN 1: TOÁN TỬ CƠ BẢN

// Bai 1:
var b1 = (8 + "10" + "11" - "12" + "13" + "14" + 10);
var b11 = ("1" + "2" + 3 - 4 + 5 * "6" + "7" + "8" + "9" + 10 * 0)
console.log(b1)
console.log(b11)

// Bai 2:
var x = 2
var a = 8 + x++ + ++x - --x + x++ + 7 
// 21
x = 4
console.log(x)
var b = 5 + ++x + ++x + --x - x-- - ++x + 10
console.log(x)
// 17
var c = 1 + x-- + --x - ++x + --x - 11
// -3
console.log(a)
console.log(b)
console.log(c)

// Bai 3:
var x = 5
var a3 = 5 + x++ + 10
// 20
x = 6
var b3 = 5 + ++x + 10
// 22
x = 6
var c3 = 5 + x-- + 10
// 21
x = 5
var d3 = 5 + --x + 10
// 19
x = 5
console.log(a3)
console.log(b3)
console.log(c3)
console.log(d3)

// Bai 4
var array = [1, 6, 8, 7, 6, 9]
var itemArray = array.length
console.log(itemArray)
var firstItem = array[0]
var lastItem = array[array.length - 1]
console.log(firstItem)
console.log(lastItem)
array.push(11,12,13,14,15)
array[0] = 10
array[array.length - 1] = 10
console.log(array)

// Bai 5:
var a = 10;
var b = a++;
var c = ++b;
var d = --c;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Bai 6:
var message = 'Director'
if (message == 'Employee') {
    console.log('Hello')
} else if (message == 'Director') {
    console.log('Greetings')

} else if (message == '') {
    console.log('No login')
}

// Bai 7:
var a7 = 1;
var b7 = 10;
var c7;
c7 = a7 + b7
if (c7 < 4) {
    console.log("Below")
}
else { 
    console.log("Over")
}

// Bai 8:
var temp = 59
if (temp < 20) {
    console.log("Tang nhiet do")
} else if (temp > 100){
    console.log("Giam nhiet do")
} else {
    console.log("Nhiet do du dung")
}

// Bai 9:
var array = [3, 5, 4, 9, 8, 1, 10]
var firstItem = array[0]
var lastItem1 = array[array.length - 1]
var sum = firstItem + lastItem
console.log(sum)
array[array.length - 1] = 20
var lastItem2 = array[array.length - 1]
var sum = firstItem + lastItem2
console.log(sum)

// Bai 10:
let password = 'trong'
console.log(password.length)
if (password.length == 0) {
    console.log("password không để trống")
}
else if (16 < password.length || password.length < 8 ){
    console.log("password k hợp lệ")
}
else {
    console.log("password hợp lệ")
}

// PHAN 2: KIEU DU LIEU NANG CAO

// Bai 1:
var x = 8
var a = 1 + x++ + 9
// x=9
// 18
var b = 7 + ++x + 3
// x=10
// 20
var c = 5 + x-- + 10
// x=9
// 25
var d = 6 + --x + 11
// x=8
// 25
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Bai 2
var a2 = 20;
var b2 = 20;
var c2 = 20;
console.log('Chu vi tam giac la: ')
var cv = a2 + b2 + c2;
console.log(cv)
if (a2 == b2 && b2 == c2 && a2 == c2) {
    console.log('Đây là tam giác đều')
    var S = a2 ** 2 * Math.sqrt(3) / 4
    console.log('Dien tich tam giac deu la: ')
    console.log(S)
}

// Bai 3:
var r = 10
var d = r * 2
const pi = 3.14
console.log('Dien tich cua hinh tron: ')
var St = pi * r * r;
console.log(St)
console.log('Chu vi cua hinh tron: ')
var CVt = 2 * pi * r;
console.log(CVt)
console.log('Chu vi cua hinh tron bang duong kinh d: ')
var CVt2 = 2 * pi * (d / 2);
console.log(CVt2)

// Bai 4:
var diem = 11;
diem < 0 ? console.log('Khong hop le') :
    (0 <= diem && diem < 5 ? console.log('Kem') :
        (5 <= diem && diem < 6.5 ? console.log('Trung binh') :
            (6.5 <= diem && diem < 8 ? console.log('Kha') :
                (8 <= diem && diem <= 10) ? console.log('Gioi') : console.log('Khong hop le')))) 


// Bai 5:
var soDienThoai = [0, 9, 1, 5, 0, 4, 9, 0, 0, 7]
if (soDienThoai.length < 0) {
    console.log("Không được để trống")
} else if (10 < soDienThoai.length || soDienThoai.length <10 ) {
    console.log("Sđt không hợp lệ")
} else if (soDienThoai.length == 10) {
    console.log("SDT hop le")
    console.log(soDienThoai.join(""))
}

// bai 6:

var x6 = 10.9;
x6 < 0 ? console.log(`Số ${x6} là số âm`) : console.log(`Số ${x6} là số dương`)
x6 % 1 == 0 ? console.log(`Số ${x6} là nguyên`) : console.log(`Số ${x6} là số thập phân`)

// Bai 7
var age = 56;
age < 13 ? console.log('Trẻ em') :
    (13 <= age && age <= 17 ? console.log('Thiếu niên') :
        (18 <= age && age <= 39 ? console.log('Trưởng thành') :
            (40 <= age && age < 65 ? console.log('Trung niên') : console.log("Già"))))

// bai 8
var button = '4'
var page = 0
1 <= Number(button) && Number(button) <= 10 ? page = button : "";
page == 10 ? button = 'next' : "";
page == 1 ? button = 'pre' : "";
console.log(button)
console.log(page)

// Bai 9