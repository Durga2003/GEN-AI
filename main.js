document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  alert('Form submitted! We will get back to you soon.');
  // Optional: Send the form data to the server using fetch or AJAX
});
