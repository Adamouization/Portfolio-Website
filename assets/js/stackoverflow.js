/**
 * Reveals/hide an accordion container for a StackOverflow post.
 * @param id: ID of the html div for a single StackOverflow post
 */
function revealStackOverflowPost(id) {
    const x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        x.previousElementSibling.className = x.previousElementSibling.className.replace("", "w3-red");
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = x.previousElementSibling.className.replace("", "w3-black");
    }
}