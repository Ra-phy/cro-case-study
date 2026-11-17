const dialog = document.querySelector('dialog');
const expandedImage = dialog.querySelector('img');
let trigger;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    trigger = button;
    expandedImage.src = button.dataset.image;
    expandedImage.alt = button.querySelector('img').alt;
    expandedImage.classList.toggle('portrait', button.classList.contains('product-shot'));
    dialog.showModal();
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { if(trigger) trigger.focus(); });
