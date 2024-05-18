// Select all buttons with the class "choose-seat-btn"
const buttons = document.querySelectorAll('.choose-seat-btn');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Redirect the user to seatselection.html when the button is clicked
        window.location.href = 'seatselection.html';
    });
});