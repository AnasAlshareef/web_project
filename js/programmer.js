
const filterButtons = document.querySelectorAll('.filter .bt_d');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.trim(); 


        const progCards = document.querySelectorAll('.card_box');


        progCards.forEach(card => {
            const spec = card.querySelector('.p_spec').textContent.trim();

            
            if (filter === "الكل") {
                card.style.display = "flex";
            }
         
            else if (spec === filter) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});  

window.onload = function () {
    const container = document.getElementById("cont_doc");
    const query = new URLSearchParams(window.location.search);

    const name = query.get("name");
    const dtime = query.get("dtime");
    const specialty = query.get("specialty");
    const desc = query.get("desc");
    const img = query.get("img") || "img/photo_2025-07-09_23-47-18.jpg";

    if (name && specialty && desc) {
        const card = document.createElement("div");
        card.className = "card_box";

        const imgDiv = document.createElement("div");
        imgDiv.className = "img_p";
        if (img) {
            imgDiv.style.backgroundImage = `url('${img}')`;
            imgDiv.style.backgroundSize = "cover";
            imgDiv.style.backgroundPosition = "center";
        }

        const title = document.createElement("h2");
        title.textContent = "م." + name;

        const label = document.createElement("label");
        label.textContent = "التخصص:";

        const spec = document.createElement("p");
        spec.className = "p_spec";
        spec.textContent = specialty;

        const descP = document.createElement("p");
        descP.textContent = desc;

        const dtimeP = document.createElement("p");
        dtimeP.textContent = "التوقيت:" + dtime;

        const btn = document.createElement("button");
        btn.className = "bt_sh";
        btn.textContent = "حجز";

        card.appendChild(imgDiv);
        card.appendChild(title);
        card.appendChild(label);
        card.appendChild(spec);
        card.appendChild(descP);
        card.appendChild(dtimeP);
        card.appendChild(btn);

        container.appendChild(card);
    }
};
