console.log ("script loaded successfully");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

console.log(nom);
console.log(email);
console.log(password);
console.log(submit);

submit.addEventListener("click", function(event) {

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all the fields.");
        return;
    }
    if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    event.preventDefault();
    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Form submitted successfully!");
});