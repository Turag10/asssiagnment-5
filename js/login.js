
function submitDonation(cardNumber) {
    // Get the donation amount for the selected card
    const donationAmount = parseInt(document.getElementById('donationAmount' + cardNumber).value);

    // Check if the donation amount is valid
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Get the balance element of the card
    const innerBlnElement = document.getElementById('innerBln' + cardNumber);
    let currentCardBalance = parseInt(innerBlnElement.innerText.replace('BDT', '').trim());

    // Add the donation to the card balance
    let newCardBalance = currentCardBalance + donationAmount;
    innerBlnElement.innerText = `${newCardBalance} BDT`;

    // Update the main balance
    const mainBalanceElement = document.getElementById('mainBalance');
    let mainBalance = parseInt(mainBalanceElement.innerText.replace('BDT', '').trim());
    mainBalance -= donationAmount;
    mainBalanceElement.innerText = `${mainBalance} BDT`;

    // Get the current date and time
    const now = new Date();

    // Retrieve the current donation history from localStorage
    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    // Add a description for the donation card
    const descriptions = {
        1: "Donate for Flood at Noakhali, Bangladesh",
        2: "Donate for Flood Relief in Feni, Bangladesh",
        3: "Aid for Injured in the Quota Movement"
    };

    // Add the new donation (card number, amount, timestamp, description)
    donationHistory.push({
        cardNumber: cardNumber,
        amount: donationAmount,
        timestamp: now.toISOString(),
        description: descriptions[cardNumber]
    });

    // Save the updated history back to localStorage
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

    // Show the confirmation modal
    const modal = document.getElementById('confirmationModal');
    modal.classList.add('active');

    // Clear the input field after the donation
    document.getElementById('donationAmount' + cardNumber).value = '';
}


// Close the confirmation modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}
function goToBlog() {
    window.location.href = 'blog.html';}
