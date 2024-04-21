document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
  
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(error) {
      error.textContent = '';
    });
  
    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Please enter your name.";
      return;
    }
  
    // Validate email
    if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      return;
    }
  
    // Validate message
    if (message === "") {
      document.getElementById("messageError").textContent = "Please enter your message.";
      return;
    }
  
    // If all validations pass, display success message
    document.getElementById("successMessage").style.display = "block";
  });
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  