const paymentForm = document.getElementById("paymentForm");
    const confirmOverlay = document.getElementById("confirmOverlay");
    const closeConfirm = document.getElementById("closeConfirm");
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");

    cardNumber.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "").slice(0, 16);
      value = value.replace(/(.{4})/g, "$1 ").trim();
      e.target.value = value;
    });

    expiryDate.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
      e.target.value = value;
    });

    cvv.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    });

    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!paymentForm.checkValidity()) {
        paymentForm.reportValidity();
        return;
      }
      confirmOverlay.classList.add("show");
    });

    closeConfirm.addEventListener("click", () => {
      confirmOverlay.classList.remove("show");
    });

    confirmOverlay.addEventListener("click", (e) => {
      if (e.target === confirmOverlay) {
        confirmOverlay.classList.remove("show");
      }
    });