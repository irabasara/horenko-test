const CTA = document.querySelectorAll('.CTA');
const modal = document.querySelector('#modal-container');
const backdrop = document.querySelector('.modal-background');
const closeBtn = document.querySelector('.modal-close');
const cookieBtn = document.querySelector('.cookie button');

function openModal() {
  document.body.classList.add('active');
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.add('out');
  document.body.removeAttribute('class');
  setTimeout(() => {
    modal.removeAttribute('class');
  }, 500);
  document.querySelector('.thanks').style.display = 'none';
  document.querySelector('.modal').style.display = 'flex';
}

modal.addEventListener('click', event => {
  if (
    event.target.classList.value === 'modal-close' ||
    event.target.classList.value === 'modal-background'
  ) {
    closeModal();
  } else return;
});

CTA.forEach(button => {
  button.addEventListener('click', () => {
    openModal();
  });
});

cookieBtn.addEventListener('click', () => {
  document.querySelector('.cookie').classList.add('close');
});

setTimeout(() => {
  document.querySelector('.cookie').classList.remove('close');
}, 3000);
