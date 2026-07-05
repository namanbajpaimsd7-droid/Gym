/* ===================================================
   IronPulse Gym Website - script.js
=================================================== */

/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* Close menu when clicking a link (mobile UX) */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

/* =========================
   BMI CALCULATOR
========================= */

function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const result = document.getElementById("result");

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        result.innerText = "Please enter valid values";
        return;
    }

    // convert cm to meters
    height = height / 100;

    const bmi = (weight / (height * height)).toFixed(2);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } 
    else if (bmi < 24.9) {
        status = "Normal";
    } 
    else if (bmi < 29.9) {
        status = "Overweight";
    } 
    else {
        status = "Obese";
    }

    result.innerText = `BMI: ${bmi} (${status})`;
}

/* =========================
   SMOOTH SCROLL FIX (optional safety)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});