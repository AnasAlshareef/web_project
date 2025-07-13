//يقوم بتخزين ازرار الفلترة لكي يقوم بعملية مطابقة الزر معاالخاصية  الفلترة
const filterButtons = document.querySelectorAll(".filter .bt_d");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.textContent.trim(); //اخد محتوا الزر لكي يتم استخدامه في الفلترة والمقارنة
    const doctorCards = document.querySelectorAll(".card_box"); // توضع هنا عندا اضافة عنصر جديد يخضع للفلترة

    doctorCards.forEach((card) => {
      const spec = card.querySelector(".p_spec").textContent.trim(); //لاخد التخصص من الكرة ومقارنته

      if (filter === "الكل" || spec === filter) {
        //شرط المقارنه
        card.style.display = "flex"; //flex للمحافظه على شكر الكروت عند عمل الفلتره
      } else {
        card.style.display = "none"; //للاخفاء
      }
    });
  });
});

//اتشاء الكروت الجديده والمرسلة من صفحة اضافة خدمه
window.onload = function () {
  //عند تحميل الصفحه يشتغل هدا الحدث
  const container = document.getElementById("cont_doc");
  const query = new URLSearchParams(window.location.search); //للحصول على البيانات المستقبله من صفحة اضافة خدمه

  //الحصول على البيانات
  const name = query.get("name");
  const dtime = query.get("dtime");
  const specialty = query.get("specialty");
  const desc = query.get("desc");
  const img = query.get("img") || "img/photo_2025-07-09_23-47-18.jpg";

  // ادا كان كل المعلومات متوفرة قم بالانشاء
  if (name && specialty && desc) {
    const card = document.createElement("div"); //انشاء div جديد
    card.className = "card_box"; //اعطائه كلاسس

    const imgDiv = document.createElement("div");
    imgDiv.className = "img_p";
    //ادا كان يحنوي على بيانات فقم باضافتها
    if (img) {
      imgDiv.style.backgroundImage = `url('${img}')`;
      imgDiv.style.backgroundSize = "cover";
      imgDiv.style.backgroundPosition = "center";
    }
    //انشاء محتويات الكرت واعطائه بياناته
    const title = document.createElement("h2");
    title.textContent = "د." + name;

    const label = document.createElement("label");
    label.textContent = "التخصص:";

    const spec = document.createElement("p");
    spec.className = "p_spec";
    spec.textContent = specialty;

    const descP = document.createElement("p");
    descP.textContent = desc;

    const labeldate = document.createElement("label");
    labeldate.textContent = "التوقيت: ";

    const dtimeP = document.createElement("span");
    dtimeP.textContent = dtime;

    const btn = document.createElement("button");
    btn.className = "bt_sh";
    btn.textContent = "حجز";
    //اضافة العناصر داخل div
    //تم اضافتها داخل الصفحة المخصصه للمجال
    card.appendChild(imgDiv);
    card.appendChild(title);
    card.appendChild(label);
    card.appendChild(spec);
    card.appendChild(descP);
    card.appendChild(labeldate);
    card.appendChild(dtimeP);
    card.appendChild(btn);

    container.appendChild(card);
  }
};
