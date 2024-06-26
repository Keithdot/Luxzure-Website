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

    document.getElementById('contactForm').submit();

    fetch('send_mail.php', {
        method: 'POST',
        body: new FormData(this) // Sends form data
    })
    .then(response => {
        // Handle response from server
        if (response.ok) {
            // Form submission successful
            console.log('Form submitted successfully');
            // Redirect to another page if needed
            // window.location.href = 'success.html';
        } else {
            // Form submission failed
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        // Handle any errors during form submission
        console.error('Error submitting form:', error);
        
    });
    window.location.href = 'index.html';
});
    // You can also perform a redirect after form submission
    
