// -------------------------------------Creating Select Date-------------------------------------------------

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

const monthDropdown = document.getElementById('month');
const dayDropdown = document.getElementById('day');
const yearDropdown = document.getElementById('year');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

for (let i = 0; i < months.length; i++) {
    const option = document.createElement('option');
    option.value = i + 1;
    option.textContent = months[i];
    monthDropdown.appendChild(option);
}

for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    dayDropdown.appendChild(option);
}

const currentYear = new Date().getFullYear();

for (let year = 1950; year <= currentYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
}

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------Showing Form------------------------------------------------------

const showForm = (flag) => {
    var signupForm = document.getElementById("signup-form");
    var signinForm = document.getElementById("signin-form");
    
    if (flag) {
        signupForm.style.display = "block";
        signinForm.style.display = "none";
    } else {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
    }
};

const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");

signupBtn.addEventListener('click', function() {
    showForm(false);
});

signinBtn.addEventListener('click', function() {
    showForm(true);
});

// ------------------------------------------------------------------------------------------------------------