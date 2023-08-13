var gallery = document.querySelector(".gallery");
var img = document.querySelectorAll(".img");
var gallery_image = document.querySelector(".gallery_image img");
var btnClose = document.querySelector(".btn-close");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var imageArray = [
    "./img/img1.jpeg",
    "./img/img2.jpeg",
    "./img/img3.jpeg",
    "./img/img4.jpeg",
    "./img/img5.jpeg",
    "./img/img6.jpeg",
    "./img/img7.jpeg",
    "./img/img8.jpeg"
];
console.log(imageArray.length)
let currentIndex;
img.forEach(function (img, index) {
    img.addEventListener("click", function (e) {
        currentIndex = index;
        showImage()
        console.log(index)
    });
})
function showImage() {
    currentIndex == imageArray.length - 1 ? next.classList.add("hide") : next.classList.remove("hide")
    currentIndex == 0 ? prev.classList.add("hide") : prev.classList.remove("hide")
    gallery.classList.remove("hide");
    gallery.classList.add("show");
    gallery_image.src = imageArray[currentIndex]
}

next.addEventListener("click", function (e) {
    currentIndex != imageArray.length - 1 ? currentIndex++ : undefined
   
    showImage()
})
prev.addEventListener("click", function (e) {
    currentIndex != 0 ? currentIndex-- : undefined
    
    showImage()
})




btnClose.addEventListener("click", function (e) {
    gallery.classList.add("hide");
    gallery.classList.remove("show");;
})