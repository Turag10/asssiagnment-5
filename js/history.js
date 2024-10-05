function goToDonation() {
    window.location.href = "index.html";  
}

function closeModal() {
    document.getElementById('confirmationModal').classList.remove('active');
}


function displayDonationHistory() {
   
    const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    console.log(donationHistory)

    
    const historyContainer = document.getElementById('donationHistoryContainer');

    
    if (donationHistory.length === 0) {
        historyContainer.innerHTML = '<p class="text-gray-600">No donations have been made yet.</p>';
        return;
    }

    
    donationHistory.forEach(donation => {
        const donationCard = document.createElement('div');
        donationCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'p-6', 'mb-4');

        
        donationCard.innerHTML = `
            <h2 class="font-semibold text-lg">${donation.amount} Taka is Donated for Card ${donation.cardNumber} - ${donation.description}</h2>
            <p class="text-gray-600 mt-2">Date: ${new Date(donation.timestamp).toLocaleString('en-BD', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full' })}</p>
        `;

        
        historyContainer.appendChild(donationCard);
    });
}

document.addEventListener('DOMContentLoaded', displayDonationHistory);
