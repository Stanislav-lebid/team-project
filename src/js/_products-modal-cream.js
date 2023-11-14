(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-primary]'),
    closeModalBtn: document.querySelector('[data-modal-close-primary]'),
    modal: document.querySelector('[data-modal-primary]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-primary');
  }
})();
