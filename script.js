document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formStatus").textContent =
    `Thanks, ${name}! Your message has been received (demo form).`;
  this.reset();
});
