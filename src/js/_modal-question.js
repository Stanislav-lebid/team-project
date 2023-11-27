(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-question-open]"),
      closeModalBtn: document.querySelector("[data-modal-question-close]"),
      modal: document.querySelector("[data-modal-question]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("is-hidden");
    }
  })();