function goToDonation() {
    window.location.href = "index.html";  // Assuming this is the name of your donation page
}

function closeModal() {
    document.getElementById('confirmationModal').classList.remove('active');
}

// Function to display donation history
function displayDonationHistory() {
    // Get the donation history from localStorage
    const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    console.log(donationHistory)

    // Get the container where the donation history will be displayed
    const historyContainer = document.getElementById('donationHistoryContainer');

    // If no donation history is found, display a message
    if (donationHistory.length === 0) {
        historyContainer.innerHTML = '<p class="text-gray-600">No donations have been made yet.</p>';
        return;
    }

    // Loop through the donation history and display each entry
    donationHistory.forEach(donation => {
        const donationCard = document.createElement('div');
        donationCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'p-6', 'mb-4');

        // Format the donation card content
        donationCard.innerHTML = `
            <h2 class="font-semibold text-lg">${donation.amount} Taka is Donated for Card ${donation.cardNumber} - ${donation.description}</h2>
            <p class="text-gray-600 mt-2">Date: ${new Date(donation.timestamp).toLocaleString('en-BD', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full' })}</p>
        `;

        // Append the donation card to the container
        historyContainer.appendChild(donationCard);
    });
}

document.addEventListener('DOMContentLoaded', displayDonationHistory);
