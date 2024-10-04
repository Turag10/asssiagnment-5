// Switch between Donation and History Pages
function showDonationPage() {
    document.getElementById('donationPage').classList.remove('hidden');
    document.getElementById('historyPage').classList.add('hidden');

    // Tab color change
    document.getElementById('donationTab').classList.add('active-tab');
    document.getElementById('historyTab').classList.remove('active-tab');
}

function showHistoryPage() {
    document.getElementById('donationPage').classList.add('hidden');
    document.getElementById('historyPage').classList.remove('hidden');

    // Tab color change
    document.getElementById('donationTab').classList.remove('active-tab');
    document.getElementById('historyTab').classList.add('active-tab');
}

// Modal control
function submitDonation(cardNumber) {
    // Example for demo purposes
    alert('Donation made successfully!'); // You can replace this with modal display logic.
    // After donation logic, open modal
    const modal = document.getElementById('confirmationModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}
