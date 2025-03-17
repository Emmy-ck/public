// Frontend Javascript Files

// Login popup script
// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const closeLogin = document.querySelector(".login-close");
    const closeSignup = document.querySelector(".signup-close");

    // Check if elements exist before adding event listeners
    if (loginBtn && loginModal) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link action
            loginModal.style.display = "flex";
        });
    }

    if (signupBtn && signupModal) {
        signupBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link action
            signupModal.style.display = "flex";
        });
    }

    if (closeLogin) {
        closeLogin.addEventListener("click", () => {
            loginModal.style.display = "none";
        });
    }

    if (closeSignup) {
        closeSignup.addEventListener("click", () => {
            signupModal.style.display = "none";
        });
    }

    // Hide modals when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (e.target === signupModal) {
            signupModal.style.display = "none";
        }
    });
});



// Backend Javascript Files

// Admin Javascript Files

// Vendor Javascript Files
