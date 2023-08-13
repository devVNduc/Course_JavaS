var gallery = document.querySelector(".gallery");
var img = document.querySelectorAll(".img");
var gallery_image = document.querySelector(".gallery_image img");







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
let currentIndex;
img.forEach(function (img, index) {
    img.addEventListener("click", function (e) {
        currentIndex = index;
        showImage()
        console.log(index)
    });
})
function showImage() {
    gallery.classList.remove("hide");
    gallery_image.src = imageArray[currentIndex]
}
