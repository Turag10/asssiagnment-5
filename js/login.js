
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
    mainBalance -= donationAmount;
    mainBalanceElement.innerText = `${mainBalance} BDT`;

    
    const now = new Date();

    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    
    const descriptions = {
        1: "Donate for Flood at Noakhali, Bangladesh",
        2: "Donate for Flood Relief in Feni, Bangladesh",
        3: "Aid for Injured in the Quota Movement"
    };

    
    donationHistory.push({
        cardNumber: cardNumber,
        amount: donationAmount,
        timestamp: now.toISOString(),
        description: descriptions[cardNumber]
    });

    
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

    
    const modal = document.getElementById('confirmationModal');
    modal.classList.add('active');

    
    document.getElementById('donationAmount' + cardNumber).value = '';
}



function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}
function goToBlog() {
    window.location.href = 'blog.html';}
