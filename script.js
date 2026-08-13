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
// Global Variables
let selectedPackPrice = 1200; // Default 1 Litre price
let selectedPackName = "1 Litre Jar";
let currentQuantity = 1;

// ⚠️ AAPNA WHATSAPP NUMBER YAHAN DALEIN (Country code 91 ke sath, bina + sign ke)
const BUSINESS_WHATSAPP_NUMBER = "918863068017"; 

// Pack Selection Handler
function selectPack(element, price, packName) {
    const cards = document.querySelectorAll('.pg-pack-card');
    cards.forEach(card => card.classList.remove('active'));

    element.classList.add('active');

    const radio = element.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    selectedPackPrice = price;
    selectedPackName = packName;

    calculateTotal();
}

// Quantity Plus/Minus Handler
function updateQuantity(change) {
    const qtyInput = document.getElementById('pgQuantity');
    let val = parseInt(qtyInput.value) + change;

    if (val >= 1 && val <= 20) {
        currentQuantity = val;
        qtyInput.value = currentQuantity;
        calculateTotal();
    }
}

// Calculate Price Function
function calculateTotal() {
    const totalAmount = selectedPackPrice * currentQuantity;
    document.getElementById('pgSummaryPack').innerText = `${selectedPackName} (${currentQuantity}x)`;
    document.getElementById('pgSummaryTotal').innerText = `₹${totalAmount.toLocaleString('en-IN')}`;
}

// WhatsApp Process Function
function processWhatsAppOrder() {
    const nameInput = document.getElementById('pgCustomerName').value.trim();
    const phoneInput = document.getElementById('pgCustomerPhone').value.trim();
    const addressInput = document.getElementById('pgCustomerAddress').value.trim();
    const paymentMethod = document.getElementById('pgPaymentMethod').value;

    // Form Validation
    if (nameInput === "") {
        alert("Kripya apna Poora Naam (Full Name) bharein!");
        document.getElementById('pgCustomerName').focus();
        return;
    }

    if (phoneInput === "" || phoneInput.length < 10) {
        alert("Kripya sahi 10-digit Mobile / WhatsApp Number bharein!");
        document.getElementById('pgCustomerPhone').focus();
        return;
    }

    if (addressInput === "") {
        alert("Kripya apna Poora Pata (Delivery Address) bharein!");
        document.getElementById('pgCustomerAddress').focus();
        return;
    }

    const grandTotal = selectedPackPrice * currentQuantity;
    const now = new Date();
    const orderTime = now.toLocaleDateString('en-IN') + ' | ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    // Formatted WhatsApp Message
    let waMessage = `🛒 *NEW GHEE ORDER RECEIVED* 🛒\n`;
    waMessage += `___________________________________\n\n`;
    waMessage += `👤 *Customer Name:* ${nameInput}\n`;
    waMessage += `📞 *Contact Number:* ${phoneInput}\n\n`;
    waMessage += `🧈 *ORDER BREAKDOWN:*\n`;
    waMessage += `• Item: *${selectedPackName}*\n`;
    waMessage += `• Quantity: *${currentQuantity} Pack(s)*\n`;
    waMessage += `• Price Per Unit: ₹${selectedPackPrice}\n`;
    waMessage += `• Total Amount: *₹${grandTotal.toLocaleString('en-IN')}*\n\n`;
    waMessage += `💳 *Payment Mode:* ${paymentMethod}\n`;
    waMessage += `🚚 *Delivery Status:* FREE Express Shipping\n\n`;
    waMessage += `📍 *DELIVERY ADDRESS:*\n${addressInput}\n`;
    waMessage += `___________________________________\n`;
    waMessage += `⏰ *Order Time:* ${orderTime}\n\n`;
    waMessage += `Kripya mera order confirm karein aur delivery timeline batayein! 🙏`;

    const encodedUrlMessage = encodeURIComponent(waMessage);
    const finalWhatsAppLink = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedUrlMessage}`;

    window.open(finalWhatsAppLink, '_blank');
}

