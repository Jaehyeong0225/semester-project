
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value);

        if (!name || isNaN(age)) {
            resultDiv.textContent = "Please enter a valid name and age.";
            return;
        }

        const ageInMonths = age * 12;

        let message = "";
        if (age < 18) {
            message = "You're still young and have lots of time to explore!";
        } else if (age < 30) {
            message = "Great time to build your dreams!";
        } else {
            message = "Wisdom and experience are on your side!";
        }

        resultDiv.innerHTML = `Hello, ${name}!<br>
        You are approximately ${ageInMonths} months old.<br>
        ${message}`;

        console.log("User name:", name);
        console.log("User age:", age);
        console.log("Age in months:", ageInMonths);
    });
});
