alert('This is a static website. Still working to make it dynamic. Though you can view the login and registeration forms.')
var slideIndex = 0;
showSlides();
function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
var modal = document.getElementById("myModal");
function cartfunction() {
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function popup() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('popup');
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}
function callFunc() {
    location.href = "./register.html";
}