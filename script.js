/* ==========================================================================
   IronPulse Gym - script.js
   Premium Interactive Biometrics & Navigation Enhancements
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       MOBILE NAVIGATION DRAWER TOGGLE
       ========================================== */
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("active");
            
            // Toggle icon bars to close cross representation
            const icon = menuBtn.querySelector("i");
            if (icon) {
                if (nav.classList.contains("active")) {
                    icon.className = "fa-solid fa-xmark";
                } else {
                    icon.className = "fa-solid fa-bars";
                }
            }
        });
        
        // Close menu drawer on clicking outside
        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
                nav.classList.remove("active");
                const icon = menuBtn.querySelector("i");
                if (icon) icon.className = "fa-solid fa-bars";
            }
        });
    }

    /* Close menu when clicking links (Mobile Navigation UX) */
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            const icon = menuBtn ? menuBtn.querySelector("i") : null;
            if (icon) icon.className = "fa-solid fa-bars";
        });
    });

    /* ==========================================
       DYNAMIC ACTIVE NAVIGATION HIGHLIGHTS
       ========================================== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const highlightActiveNav = () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", highlightActiveNav);

    /* ==========================================
       SMOOTH INTERACTIVE SCROLL COHESION
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

/* ==========================================
   HIGH-END BESPOKE BMI BIOMETRIC CALCULATOR
   ========================================== */
function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultPanel = document.getElementById("bmiResultPanel");
    const scoreDisplay = document.getElementById("resultScore");
    const statusDisplay = document.getElementById("resultStatus");
    const adviceDisplay = document.getElementById("resultAdvice");

    if (!heightInput || !weightInput) return;

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // Dynamic error handling animation
    if (!height || !weight || height <= 40 || height > 250 || weight <= 10 || weight > 300) {
        if (resultPanel) {
            resultPanel.classList.add("active");
            resultPanel.style.borderColor = "var(--clr-primary)";
        }
        if (scoreDisplay) scoreDisplay.innerText = "ERR";
        if (statusDisplay) statusDisplay.innerText = "Invalid Metrics";
        if (adviceDisplay) adviceDisplay.innerText = "Please input realistic physiological indicators (Height: 40-250cm, Weight: 10-300kg).";
        return;
    }

    // Convert cm to meters
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let status = "";
    let advice = "";
    let statusColor = "var(--clr-primary)";

    if (bmi < 18.5) {
        status = "Lean Framework (Underweight)";
        advice = "Your body frame would benefit significantly from our structured hypertrophy and clean hyper-caloric diets. Let's build healthy foundation mass.";
        statusColor = "#3b82f6"; // Beautiful blue accent
    } 
    else if (bmi < 24.9) {
        status = "Optimized Balance (Healthy)";
        advice = "Superb biological balance! Keep optimizing performance, core stability, and cardio endurance with our Standard Tier program.";
        statusColor = "#10b981"; // Vibrant health emerald green
    } 
    else if (bmi < 29.9) {
        status = "Overweight Profile (High Mass)";
        advice = "A body composition that's perfect for intense dynamic conditioning, heavy lifting, and customized metabolic acceleration routines.";
        statusColor = "var(--clr-secondary)"; // Premium orange
    } 
    else {
        status = "Robust Profile (Obese)";
        advice = "High-priority longevity target. We recommend our customized biochemical and low-impact cardiovascular acceleration program under direct counselor care.";
        statusColor = "var(--clr-primary)"; // Core accent red
    }

    // Interactive rendering with dynamic state adjustments
    if (resultPanel) {
        resultPanel.classList.add("active");
        resultPanel.style.borderColor = "rgba(255, 59, 59, 0.4)";
    }
    
    if (scoreDisplay) {
        scoreDisplay.innerText = bmi;
        scoreDisplay.style.color = statusColor;
    }
    
    if (statusDisplay) {
        statusDisplay.innerText = status;
    }
    
    if (adviceDisplay) {
        adviceDisplay.innerText = advice;
    }
}
