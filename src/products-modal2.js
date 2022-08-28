(() => {
  const refs = {
    openModalBtn: document.querySelector("[products-overlay-open2]"),
    closeModalBtn: document.querySelector("[products-overlay-close2]"),
    modal: document.querySelector("[products-overlay2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--hidden2");
  }
})();