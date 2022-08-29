(() => {
  const refs = {
    openModalBtn: document.querySelector("[products-overlay-open]"),
    closeModalBtn: document.querySelector("[products-overlay-close]"),
    modal: document.querySelector("[products-overlay]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--hidden");
  }
})();
