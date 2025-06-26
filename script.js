document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    // In a real site, you would send the form data to a server
    alert("Thank you for your message! We will contact you soon.");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
