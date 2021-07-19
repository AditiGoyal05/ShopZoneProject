var slideIndex = 0;
showSlides();

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
function showSlides() {
    var slides = document.getElementsByClassName("slide");
    // if (n > slides.length) { slideIndex = 1 }
    // if (n < 1) { slideIndex = slides.length }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
var modal = document.getElementById("myModal");
function cartfunction(){
    modal.style.display = "block";
}

// var modal = document.getElementById("myModal");

// var btn = document.getElementById("mylnk");

var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//     modal.style.display = "block";
// }

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// var cartBtns = document.getElementsByClassName('cartBtn');

// cartBtns.addEventListener("click", function () {
//     alert('Hi Aditi!');
// });

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function callFunc() {
    location.href = "./register.html";
}
// function toggle(){
//     var blur = Document.getElementById('blur');
//     blur.classList.toggle('active')
// }