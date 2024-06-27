document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // For demonstration, using hardcoded credentials
    const validUsername = "semibello11@gmail.com";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html"; 
    } else {
      document.getElementById("errorMessage").classList.remove("hidden");
    }
  });

// document.addEventListener("DOMContentLoaded", function () {
//   if (localStorage.getItem("loggedIn") === "true") {
//     window.location.href = "index.html"; // Redirect if already logged in
//   }
// }
// );
