---
layout: default
title: Contact
permalink: /contact/
hcaptcha: true
---

# Consulting enquiries

I'm available for consulting engagements across platform engineering, backend and API development, Kubernetes, CI/CD, architecture reviews, and cloud migrations.

Fill in the form below — I aim to respond within two business days.

{::nomarkdown}
<form id="contact-form" action="https://api.web3forms.com/submit" method="POST" novalidate>
  <input type="hidden" name="access_key" value="e5162d1c-fb43-4e5b-b923-924d0c5d3659">
  <input type="hidden" name="subject" value="Consulting enquiry — rndagano.github.io">
  <input type="hidden" name="from_name" value="rndagano.github.io contact form">

  <!-- Honeypot: hidden from humans; bots fill it in and the submission is discarded -->
  <input type="checkbox" name="botcheck" class="form-honeypot" tabindex="-1" autocomplete="off">

  <div class="form-group">
    <label for="name">Name <span class="form-required" aria-hidden="true">*</span></label>
    <input type="text" id="name" name="name" required minlength="2" maxlength="100"
           autocomplete="name" placeholder="Your full name">
  </div>

  <div class="form-group">
    <label for="email">Email <span class="form-required" aria-hidden="true">*</span></label>
    <input type="email" id="email" name="email" required maxlength="254"
           autocomplete="email" placeholder="you@example.com"
           aria-describedby="email-error">
    <span id="email-error" class="form-field-error" aria-live="polite"></span>
  </div>

  <div class="form-group">
    <label for="company">
      Company
      <span class="form-label-note">(optional — enter "Individual" if applicable)</span>
    </label>
    <input type="text" id="company" name="company" maxlength="100"
           autocomplete="organization" placeholder="Company or Individual">
  </div>

  <div class="form-group">
    <label for="inquiry_type">Nature of enquiry <span class="form-required" aria-hidden="true">*</span></label>
    <select id="inquiry_type" name="inquiry_type" required>
      <option value="" disabled selected>Select…</option>
      <option>Platform engineering</option>
      <option>Backend / API development (Java, Spring Boot)</option>
      <option>Kubernetes &amp; cloud-native</option>
      <option>CI/CD &amp; GitOps</option>
      <option>Architecture review</option>
      <option>Cloud migration</option>
      <option>Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="timeline">Rough timeline <span class="form-required" aria-hidden="true">*</span></label>
    <select id="timeline" name="timeline" required>
      <option value="" disabled selected>Select…</option>
      <option>Immediate (within 2–4 weeks)</option>
      <option>1–3 months</option>
      <option>3–6 months</option>
      <option>6+ months</option>
      <option>Exploratory — no firm timeline yet</option>
    </select>
  </div>

  <div class="form-group">
    <label for="budget">Budget range <span class="form-required" aria-hidden="true">*</span></label>
    <select id="budget" name="budget" required>
      <option value="" disabled selected>Select…</option>
      <option>Under €5 000</option>
      <option>€5 000 – €20 000</option>
      <option>€20 000 – €50 000</option>
      <option>€50 000+</option>
      <option>Not yet determined</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message <span class="form-required" aria-hidden="true">*</span></label>
    <textarea id="message" name="message" required minlength="20" maxlength="2000"
              rows="6" placeholder="Describe the engagement you have in mind…"></textarea>
  </div>

  <div class="h-captcha" data-captcha="true"></div>

  <div class="form-group form-consent">
    <input type="checkbox" id="gdpr_consent" name="gdpr_consent" required>
    <label for="gdpr_consent">
      I agree that the information submitted here will be used solely to respond to my enquiry.
      No marketing will be sent without my explicit consent.
      I can request deletion of my data at any time by emailing the site owner.
      <span class="form-required" aria-hidden="true">*</span>
    </label>
  </div>

  <div id="form-status" role="alert" aria-live="polite"></div>

  <button type="submit" id="submit-btn">Send enquiry</button>
</form>

<p class="form-privacy-note">
  <strong>Transparency:</strong> This form is processed by
  <a href="https://web3forms.com/privacy" rel="noopener noreferrer">Web3Forms</a>,
  which forwards your submission by email and does not store it beyond delivery.
  Spam protection uses <a href="https://www.hcaptcha.com/privacy" rel="noopener noreferrer">hCaptcha</a>
  (Cloudflare) and a honeypot field; both are invisible unless you trigger the captcha challenge.
  No cookies are set by this form. For data deletion requests, contact the site owner directly via GitHub.
</p>

<script>
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
      if (!document.getElementById('gdpr_consent').checked) {
        showStatus('Please accept the privacy notice before sending.', 'error');
      } else {
        form.querySelector(':invalid').focus();
        showStatus('Please fill in all required fields.', 'error');
      }
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
</script>
{:/nomarkdown}
