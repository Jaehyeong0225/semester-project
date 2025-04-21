document.addEventListener("DOMContentLoaded", function () {
    const currentURL = window.location.href;
    const navLinks = document.querySelectorAll(".menu-bar a");

    navLinks.forEach(link => {
        if (currentURL.includes(link.href)) {
            navLinks.forEach(l => l.classList.remove("active")); 
            link.classList.add("active");
        }
    });
});
