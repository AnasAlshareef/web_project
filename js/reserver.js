document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".bt_sh");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".card_box");
      const name = encodeURIComponent(
        card.querySelector("h2").textContent.trim()
      );
      const spec = encodeURIComponent(
        card.querySelector(".p_spec").textContent.trim()
      );
      const time = encodeURIComponent(
        card.querySelector(".sp_datetime").textContent.trim()
      );

      const params = new URLSearchParams({
        name: name,
        spec: spec,
        time: time,
      });
      window.location.href = "reservpage.html?" + params.toString();
    });
  });
});
