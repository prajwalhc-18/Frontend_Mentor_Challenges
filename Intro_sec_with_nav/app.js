 // JavaScript to toggle the visibility of the features/company list
 document.querySelectorAll('.dropdown-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      
      var targetId = link.getAttribute('data-target');
      var targetList = document.getElementById(targetId);
      targetList.style.display = (targetList.style.display === 'none' || targetList.style.display === '') ? 'block' : 'none';
    });
  });