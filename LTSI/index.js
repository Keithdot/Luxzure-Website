console.log("Script loaded")
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
     // Prevent the default form submission

    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    // Check if any field is empty
    if (firstName === '' || lastName === '' || email === '') {
        alert('Please fill in all fields.');
        return; // Stop form submission
    }
});