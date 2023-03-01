function lowercaseselect() {
    lowercaseletters = prompt("Would you like to include lowercase letters in your password? (Yes/No)");
    lowercaseletters = lowercaseletters.toLowerCase();

    if (lowercaseletters == ("")) {
        alert("please enter Yes or No");
        lowercaseselect();

    } else if (lowercaseletters === "yes") {
        lowercaseletters = true;
        return lowercaseletters;

    } else if (lowercaseletters === "no") {
        lowercaseletters = false;
        return lowercaseletters;

    } else {
        alert("You may now proceed to the next step");
        lowercaseselect();
    }
    return lowercaseletters;

}
