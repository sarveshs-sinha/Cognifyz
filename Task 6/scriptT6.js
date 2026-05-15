document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
