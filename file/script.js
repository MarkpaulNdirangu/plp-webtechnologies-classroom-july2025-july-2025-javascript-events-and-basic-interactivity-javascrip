// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

// Dynamic Content Loader
const contentButton = document.getElementById('loadContent');
const contentArea = document.getElementById('contentArea');
const contents = [
    'Discover amazing new features in our latest update!',
    'Join our community for exclusive events and updates.',
    'Explore our new tools designed to enhance your experience.'
];
let currentContentIndex = 0;

contentButton.addEventListener('click', () => {
    currentContentIndex = (currentContentIndex + 1) % contents.length;
    contentArea.textContent = contents[currentContentIndex];
    contentArea.classList.add('content-loaded');
    setTimeout(() => contentArea.classList.remove('content-loaded'), 500);
});

// Custom Form Validation
const form = document.getElementById('newsletterForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

function validateName(name) {
    if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateName(nameInput.value.trim());
    const isEmailValid = validateEmail(emailInput.value.trim());

    if (isNameValid && isEmailValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Real-time validation on input
nameInput.addEventListener('input', () => validateName(nameInput.value.trim()));
emailInput.addEventListener('input', () => validateEmail(emailInput.value.trim()));