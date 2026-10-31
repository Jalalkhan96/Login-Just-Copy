const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn && container) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
}

if (loginBtn && container) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

// Show/hide password toggle: one small button after every password field.
// type="button" is essential — without it the toggle would submit the form.
document.querySelectorAll('input[type="password"]').forEach((input) => {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'toggle-password';
    toggle.textContent = 'Show';
    toggle.setAttribute('aria-label', 'Show password');
    toggle.addEventListener('click', () => {
        const showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        toggle.textContent = showing ? 'Show' : 'Hide';
        toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    });
    input.insertAdjacentElement('afterend', toggle);
});

// Basic form validation: name required, email must look like an email,
// password at least 6 characters. Invalid submits are blocked and the
// first problem is shown under the form instead of submitting.
function showFormError(form, message) {
    let error = form.querySelector('.form-error');
    if (!error) {
        error = document.createElement('p');
        error.className = 'form-error';
        form.appendChild(error);
    }
    error.textContent = message;
}

function clearFormError(form) {
    const error = form.querySelector('.form-error');
    if (error) {
        error.textContent = '';
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        let problem = '';
        if (nameInput && !nameInput.value.trim()) {
            problem = 'Please enter your name.';
        } else if (emailInput && !isValidEmail(emailInput.value.trim())) {
            problem = 'Please enter a valid email address.';
        } else if (passwordInput && passwordInput.value.length < 6) {
            problem = 'Password must be at least 6 characters.';
        }
        if (problem) {
            event.preventDefault();
            showFormError(form, problem);
        } else {
            clearFormError(form);
        }
    });
    // Clear the error as soon as the user starts fixing the form.
    form.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', () => clearFormError(form));
    });
});
