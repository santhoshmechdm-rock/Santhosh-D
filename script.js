document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        document.getElementById('responseMessage').textContent = 'Thank you! Your message has been sent.';
        document.getElementById('responseMessage').style.color = 'green';

        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill in all fields.';
        document.getElementById('responseMessage').style.color = 'red';
    }
});