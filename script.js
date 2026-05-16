console.log("script loaded successfully");
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

    const user = {
        name: nom.value,
        email: email.value,
        password: password.value
    };

    console.log("button clicked");
    console.log("User object:", user);
    alert("Form submitted successfully!");

});