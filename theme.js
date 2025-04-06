// Set up button-next functionality
function setupNextButton() {
    const nextButton = document.getElementById('button-next');
    if (nextButton) {
        // Set the button text from config
        nextButton.textContent = CONFIG.navigation.nextButtonText;

        // Add click event to navigate to the next page
        nextButton.addEventListener('click', () => {
            window.location.href = CONFIG.navigation.nextPageUrl;
        });
    } else {
        console.warn("⚠️ Button with id 'button-next' not found!");
    }
}

// Initialize theme settings
window.addEventListener('DOMContentLoaded', () => {
    setupNextButton();
});