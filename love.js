function disableButton(button) {
    // Lock the button visually and disable it
    button.classList.add("locked");
    button.style.pointerEvents = "none";  // Disable clicks
    button.style.cursor = "not-allowed";  // Show that it's locked
    button.innerHTML = "Not Today! 😜";    // Fun message
}

function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
}


