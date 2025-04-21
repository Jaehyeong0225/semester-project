
document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phoneNumber");
    const phoneError = document.getElementById("phoneError");
    const fileInput = document.getElementById("fileInput");
    const fileContent = document.getElementById("fileContent");

    phoneInput.addEventListener("input", () => {
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.textContent = "Please enter digits only.";
            phoneInput.value = phoneInput.value.replace(/\D/g, "");
        } else {
            phoneError.textContent = "";
        }
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                fileContent.textContent = e.target.result;
            };
            reader.readAsText(file);
        }
    });
});

let selections = [];

function addSelection() {
    const checkboxes = document.querySelectorAll("#userForm input[type='checkbox']:checked");
    const textInput = document.getElementById("textInput").value.trim();

    checkboxes.forEach(checkbox => {
        if (!selections.includes(checkbox.value)) {
            selections.push(checkbox.value);
        }
    });

    if (textInput && !selections.includes(textInput)) {
        selections.push(textInput);
        document.getElementById("textInput").value = "";
    }

    displaySelections();
}

function removeSelection() {
    selections.pop();  
    displaySelections();
}

function displaySelections() {
    const selectionList = document.getElementById("selectionList");
    selectionList.innerHTML = ""; 

    selections.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        selectionList.appendChild(li);
    });
}
