function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the required fields.');
      return false;
    }
  
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    return true; // Form submission allowed
  }
  