console.log("Script loaded")
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    // Check if any field is empty
    if (firstName === '' || lastName === '' || email === '' || subject === '') {
        alert('Please fill in all fields.');
        return; // Stop form submission
    }

    // Here you can perform actions like sending data to server or displaying a message
    // For demonstration, let's just display the form data in the console
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Subject: " + subject);

    // You can also perform a redirect after form submission
    // window.location.href = 'thankyou.html';
});