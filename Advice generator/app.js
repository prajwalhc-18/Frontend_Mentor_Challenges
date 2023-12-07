document.addEventListener("DOMContentLoaded", function () {
  const adviceDiv = document.querySelector(".advice"); // Use querySelector directly
  const diceButton = document.querySelector(".dice button");

  // Function to fetch advice from the API
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      return data.slip.advice;
    } catch (error) {
      console.error("Error fetching advice:", error);
      return "Unable to fetch advice at the moment.";
    }
  };

  // Function to handle button click
  // Function to handle button click
  const handleButtonClick = async () => {
    const advice = await fetchAdvice();
    adviceDiv.textContent = `"${advice}"`;
  };

  // Add click event listener to the dice button
  diceButton.addEventListener("click", handleButtonClick);
});
