document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const name = decodeURIComponent(params.get("name") || "");
  const spec = decodeURIComponent(params.get("spec") || "");
  const time = decodeURIComponent(params.get("time") || "");

  if (name && spec && time) {
    const newCard = `
            <div class="div_data">
                <div class="div_name">
                    <table>
                        <tr>
                            <th>الاسم </th>
                            <th>التخصص</th>
                            <th>التوقيت</th>
                        </tr>
                        <tr>
                            <td>${name}</td>
                            <td>${spec}</td>
                            <td>${time}</td>
                        </tr>
                    </table>
                </div>
                <div class="div_ch">
                    <button class="bt_chek"><i class="fa-solid fa-check"></i></button>
                    <button class="bt_chek"><i class="fa-solid fa-circle-xmark"></i></button>
                </div>
            </div>
        `;

    document
      .getElementById("cont_add")
      .insertAdjacentHTML("beforeend", newCard);
  }
});
