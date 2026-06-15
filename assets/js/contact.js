(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var btn = document.getElementById('submit-btn');
  var emailEl = document.getElementById('email');
  var emailError = document.getElementById('email-error');

  emailEl.addEventListener('input', function () {
    emailError.textContent = '';
    emailEl.removeAttribute('aria-invalid');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.querySelector(':invalid').focus();
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailEl.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailEl.setAttribute('aria-invalid', 'true');
      emailEl.focus();
      return;
    }
    emailError.textContent = '';
    emailEl.removeAttribute('aria-invalid');

    if (typeof hcaptcha === 'undefined' || !hcaptcha.getResponse()) {
      showStatus('Please complete the CAPTCHA before sending.', 'error');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    showStatus('', '');

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        if (json.success) {
          showStatus("Message sent. I’ll be in touch within two business days.", 'ok');
          form.reset();
          hcaptcha.reset();
          btn.disabled = false;
          btn.textContent = 'Send enquiry';
        } else {
          throw new Error(json.message || 'Submission failed.');
        }
      })
      .catch(function () {
        showStatus('Something went wrong. Please try again or reach out via GitHub.', 'error');
        btn.disabled = false;
        btn.textContent = 'Send enquiry';
      });
  });

  function showStatus(msg, type) {
    status.textContent = msg;
    status.className = msg ? 'form-status form-status-' + type : '';
  }
})();
