// Interactivity: contact form (mailto), copy email, small form feedback
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  const copyBtn = document.getElementById('copy-email');
  const email = 'shaikhrizwan0893@gmail.com'; // updated to your Gmail
  const form = document.getElementById('contact-form');

  if (year) year.textContent = new Date().getFullYear();

  // copy email button
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => (copyBtn.textContent = email), 1400);
      } catch {
        alert(email);
      }
    });
  }

  // contact form: open mail client with prefilled body
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const from = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      if (!name || !from || !msg) {
        document.getElementById('form-note').textContent = 'Please complete all fields.';
        return;
      }
      const subject = encodeURIComponent(`Website message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${msg}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      document.getElementById('form-note').textContent = 'Opening your mail client…';
      form.reset();
    });
    const clear = document.getElementById('clear');
    if (clear) clear.addEventListener('click', () => form.reset());
  }
});