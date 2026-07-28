// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(sec => {
    observer.observe(sec);
});

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector("input[type='text']").value.trim();
const email = form.querySelector("input[type='email']").value.trim();
const phone = form.querySelector("input[type='tel']").value.trim();
const message = form.querySelector("textarea").value.trim();

if(name==="" || email==="" || phone==="" || message===""){

alert("Please fill all fields.");

return;

}

alert("Thank You! Your message has been sent.");

form.reset();

});

}

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", ()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click", ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Buy Button Animation
// ===============================

document.querySelectorAll(".amazon, .flipkart").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===============================
// Welcome Message
// ===============================

window.onload = function(){

console.log("Welcome to Pure Ghee Website");

};