document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter form');
  const emailInput = document.getElementById('email');
  const messageBox = document.querySelector('.newsletter .message');

  if (!form || !emailInput || !messageBox) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = (emailInput.value || '').trim();

    messageBox.classList.remove('error', 'success');
    messageBox.textContent = '';

    if (!EMAIL_RE.test(email)) {
      messageBox.classList.add('error');
      messageBox.textContent = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    messageBox.classList.add('success');
    messageBox.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
    emailInput.value = '';
  });
});
