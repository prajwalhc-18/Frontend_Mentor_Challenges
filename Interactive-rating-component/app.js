document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    let selectedRating = null;
  
    ratingButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Remove the "selected" class from all buttons
        ratingButtons.forEach(function (btn) {
          btn.classList.remove('selected');
        });
  
        // Set the selected rating
        selectedRating = button.getAttribute('data-rating');
  
        // Add the "selected" class to the clicked button
        button.classList.add('selected');
      });
    });
  
    window.submitRating = function () {
      if (selectedRating !== null) {
        alert('Rating submitted: ' + selectedRating);
        // Here, you can send the rating to your server or perform other actions.
  
        // Reset the style of the selected button after submission
        ratingButtons.forEach(function (btn) {
          btn.classList.remove('selected');
        });
  
        // Reset the selectedRating variable
        selectedRating = null;
      } else {
        alert('Please select a rating before submitting.');
      }
    };
  });
  