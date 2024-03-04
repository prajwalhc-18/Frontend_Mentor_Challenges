const shareImage = document.querySelector('.share img');
const shareOptions = document.createElement('div');
shareOptions.classList.add('share-s');
shareOptions.style.backgroundColor = 'hsl(217, 19%, 35%)';
shareOptions.innerHTML = `
  <p style="margin-bottom: 15px;">SHARE</p>
  <img src="./data/icon-facebook.svg" alt="Facebook" />
  <img src="./data/icon-twitter.svg" alt="Twitter" />
  <img src="./data/icon-pinterest.svg" alt="Pinterest" />
`;

// Initially hide the shareOptions
shareOptions.style.display = 'none';

shareImage.addEventListener('click', function () {
  // Toggle visibility of shareOptions
  if (shareOptions.style.display === 'none') {
    // Position shareOptions beside the share image
    const imageRect = shareImage.getBoundingClientRect();
    shareOptions.style.position = 'absolute';
    shareOptions.style.top = `${imageRect.top}px`;
    shareOptions.style.left = `${imageRect.right}px`;
    // Show the shareOptions
    shareOptions.style.display = 'flex';
  } else {
    // Hide the shareOptions
    shareOptions.style.display = 'none';
  }
});

// Add flex styling to the share options
shareOptions.style.flexDirection = 'column'; // Change to column for vertical alignment
shareOptions.style.alignItems = 'center';
shareOptions.style.padding = '10px'; // Adjust as needed
shareOptions.style.borderRadius = '10px';
shareOptions.style.color = 'white';

// Increase space between p and images
shareOptions.querySelector('p').style.marginBottom = '15px'; // Adjust as needed

// Make the share image initially visible
shareImage.style.zIndex = 'initial';

// Append shareOptions to the body
document.body.appendChild(shareOptions);
