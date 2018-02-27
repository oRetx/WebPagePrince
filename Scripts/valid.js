function validate() {
    // check if input is bigger than 3
    var value = document.forms["myForm"]["fname"].value;
    if (value.length < 5) {
        alert("More characters please");
        return false; // keep form from submitting
    }
}