console.log("script loaded successfully");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

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

    // ✅ Sauvegarder dans le Local Storage
    localStorage.setItem("user", JSON.stringify(user));

    console.log("User saved:", user);
    console.log("Local Storage:", localStorage.getItem("user"));
    alert("Form submitted successfully!");

});