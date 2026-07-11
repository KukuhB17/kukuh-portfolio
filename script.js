// ================================
// PORTFOLIO KUKUH
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // Typing Effect
    // =====================

    const typing = document.getElementById("typing");

    const words = [
        "Web Developer",
        "Python Programmer",
        "Database Enthusiast",
        "MATLAB Developer",
        "Frontend Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 50 : 120);

    }

    type();



    // =====================
    // Navbar saat scroll
    // =====================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#020617";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

        } else {

            header.style.background = "rgba(15,23,42,.95)";
            header.style.boxShadow = "none";

        }

    });



    // =====================
    // Hero Fade In
    // =====================

    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    heroText.style.opacity = "0";
    heroImage.style.opacity = "0";

    heroText.style.transform = "translateX(-60px)";
    heroImage.style.transform = "translateX(60px)";

    setTimeout(() => {

        heroText.style.transition = "1s";
        heroImage.style.transition = "1s";

        heroText.style.opacity = "1";
        heroImage.style.opacity = "1";

        heroText.style.transform = "translateX(0)";
        heroImage.style.transform = "translateX(0)";

    },300);



    // =====================
    // Efek gambar mengambang
    // =====================

    let naik = true;

    setInterval(() => {

        if (naik) {

            heroImage.style.transform = "translateY(-10px)";

        } else {

            heroImage.style.transform = "translateY(10px)";

        }

        heroImage.style.transition = "2s ease";

        naik = !naik;

    },2000);



    // =====================
    // Efek tombol
    // =====================

    const btn = document.querySelector(".btn");

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});