
//يقوم بتخزين ازرار الفلترة لكي يقوم بعملية مطابقة الزر معاالخاصية  الفلترة
const filterButtons = document.querySelectorAll('.filter .bt_d');

//اخد محتوا الزر لكي يتم استخدامه في الفلترة والمقارنة
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.trim(); // التخصص الذي نضغط عليه

        // توضع هنا عندا اضافة عنصر جديد يخضع للفلترة
        const engerCards = document.querySelectorAll('.card_box');

        engerCards.forEach(card => {
            const spec = card.querySelector('.p_spec').textContent.trim();//لاخد التخصص من الكرة ومقارنته//لاخد التخصص من الكرة ومقارنته

           
            if (filter === "الكل") {
                card.style.display = "flex";
            }
          
            else if (spec === filter) {
                card.style.display = "flex";//flex للمحافظه على شكر الكروت عند عمل الفلتره
            } else {
                card.style.display = "none";
            }
        });
    });
});  

//عند تحميل الصفحه يشتغل هدا الحدث
window.onload = function () {
    const container = document.getElementById("cont_eng");
    const query = new URLSearchParams(window.location.search);//للحصول على البيانات المستقبله من صفحة اضافة خدمه

    const name = query.get("name");
    const dtime = query.get("dtime");
    const specialty = query.get("specialty");
    const desc = query.get("desc");
    const img = query.get("img") || "img/photo_2025-07-09_23-47-18.jpg";

    // ادا كان كل المعلومات متوفرة قم بالانشاء
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
