(() => {
  const refs = {
    openModalBtn: document.querySelector("[products-overlay-open3]"),
    closeModalBtn: document.querySelector("[products-overlay-close3]"),
    modal: document.querySelector("[products-overlay3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--hidden3");
  }
})();