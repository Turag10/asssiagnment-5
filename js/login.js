function submitDonation(cardNumber) {
    const donationAmount = parseInt(document.getElementById('donationAmount' + cardNumber).value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const innerBlnElement = document.getElementById('innerBln' + cardNumber);
    let currentCardBalance = parseInt(innerBlnElement.innerText.replace('BDT', '').trim());


    let newCardBalance = currentCardBalance + donationAmount;
    innerBlnElement.innerText = `${newCardBalance} BDT`;

    const mainBalanceElement = document.getElementById('mainBalance');
    let mainBalance = parseInt(mainBalanceElement.innerText.replace('BDT', '').trim());

    // Add the donation to the main balance
    mainBalance += donationAmount;
    mainBalanceElement.innerText = `${mainBalance} BDT`;

    // Show confirmation modal
    const modal = document.getElementById('confirmationModal');
    modal.classList.add('active');

    // Clear the input field after submission
    document.getElementById('donationAmount' + cardNumber).value = '';
}

function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}
