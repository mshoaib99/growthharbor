(() => {
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  if (menu && nav) menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); const s = form.querySelector('[data-form-status]'); if (s) s.textContent = 'Thanks. The form is currently in preview mode and has not sent an email.'; }));
})();
