"use strict";


window.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["registerForm"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    try {
      validateForm(form);
      console.log("Form submitted successfully.");
    } catch (error) {
      console.error("Validation Error:", error.message);
      alert(error.message);
    }
  });
});

function validateForm(form) {
  const fullName = form.elements["fullName"];
  const username = form.elements["username"];
  const email = form.elements["email"];
  const password = form.elements["password"];
  const confirmPassword = form.elements["confirmPassword"];
  const phone = form.elements["phone"];
  const dob = form.elements["dob"];
  const terms = form.elements["terms"];

  if (!/^[A-Za-z\s]+$/.test(fullName.value)) {
    throw new Error("Full Name must not contain numbers or special characters.");
  }

  if (!/^[A-Za-z][A-Za-z0-9]{5,14}$/.test(username.value)) {
    throw new Error("Username must be 6-15 characters, start with a letter, and contain only letters and numbers.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    throw new Error("Invalid email format.");
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}/.test(password.value)) {
    throw new Error("Password must be 8-20 characters, with uppercase, lowercase, digit, and special character.");
  }

  if (password.value !== confirmPassword.value) {
    throw new Error("Passwords do not match.");
  }

  if (!/^\d{10}$/.test(phone.value)) {
    throw new Error("Phone number must be 10 digits.");
  }

  const birthDate = new Date(dob.value);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  if (isNaN(birthDate) || age < 18) {
    throw new Error("You must be at least 18 years old.");
  }

  if (!terms.checked) {
    throw new Error("You must agree to the terms.");
  }
}
