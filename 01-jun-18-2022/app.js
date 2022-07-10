// shortcut to comment
// Ctrl + / (on Windows)
// Cmd + / (on Mac)

// show an annoying alert when page loads!
// show alert message when the page loads
// alert( 'Hi, this is Prashanth. Glad to see you here.' );

// get hold of the button by its id
const btnWishMe = document.getElementById( 'btn-wish-me' );

// Hey browser! Please execute this function when the button is clicked.
btnWishMe.onclick = function() {
    const userName = document.getElementById( 'user-name' );
    alert( 'Good morning ' + userName.value );
};