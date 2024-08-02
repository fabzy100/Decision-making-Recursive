//Function to determine the ticket price based on age
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Invalid age";
    }
}

// Function to prompt the user for their age and display the ticket price
function promptForAge() {
    let age = prompt("Please enter your age:");
    age = parseInt(age, 10);

    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid age.");
    } else {
        let price = getTicketPrice(age);
        console.log(`The ticket price is $${price}.`);
    }
}
 console.log(promptForAge());
