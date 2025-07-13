const authDialog = document.getElementById("auth-dialog");
const dialogContent = document.getElementById("dialog-content");

document.getElementById("open-login").onclick = (e) => {
  e.preventDefault();
  authDialog.showModal();
};

document.getElementById("open-signup").onclick = (e) => {
  e.preventDefault();
  authDialog.showModal();
};

document.getElementById("switch-to-signup").onclick = () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
};

document.getElementById("switch-to-login").onclick = () => {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
};

authDialog.addEventListener("click", (e) => {
  const rect = authDialog.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    authDialog.close();
  }
});


//_________________________________________________________________________
const services = [
  {
    name: "برمجة",
    image: "img/images.jpg",
    linkk: "programmerpage.html",
  },
  { name: "طب", image: "img/img5.jpg", linkk: "doctorpage.html" },
  {
    name: "تعليم",
    image: "img/images (1).jpg",
    linkk: "teacherpage.html",
  },
  { name: "انشاء", image: "img/img4.jpg", linkk: "engineer.html" },
  { name: "تصميم", image: "img/images (3).jpg", linkk: "#" },
  { name: "شبكات", image: "img/images (2).jpg", linkk: "#" },
  {
    name: "قانون ومحاماة",
    image:
      "https://www.hbku.edu.qa/sites/default/files/spotlight/rule_of_law_-_forum_1.jpg",
    linkk: "#",
  },
  {
    name: "صحافة وإعلام",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },

  {
    name: "تحليل البيانات",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
  {
    name: "المالية والمحاسبة",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },

  {
    name: "تصميم داخلي",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
  {
    name: "التمريض",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },

  {
    name: "الترجمة",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
  {
    name: "التسويق الرقمي",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTKxNkNcFl6emb5TdxzWRqLyBAIOTxoBRdw&s",
    linkk: "#",
  },
  {
    name: "كتابة المحتوى",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
  {
    name: "التغذية",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
  {
    name: "التصوير الفوتوغرافي",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwh-F1TqpApuTZkLQDW98njoxmPoOSmG93Q&s",
    linkk: "#",
  },
  {
    name: "الإخراج والمونتاج",
    image:
      "https://images.stockcake.com/public/0/4/a/04aa8ad2-b422-44c4-bf3e-20fdb7a7cd1b_large/video-editing-suite-stockcake.jpg",
    linkk: "#",
  },

  {
    name: "التنمية البشرية",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },

  {
    name: "علوم البيئة",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkk: "#",
  },
];

const container = document.getElementById("cards-container");

services.forEach((service) => {
  const link = document.createElement("a");
  link.href = service.linkk;
  link.style.textDecoration = "none";
  link.style.color = "inherit";
  link.style.display = "block";
  link.style.height = "100%";

  const card = document.createElement("div");
  card.className = "service-card";
  card.style.backgroundImage = `url('${service.image}')`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.textContent = service.name;

  card.appendChild(cardContent);
  link.appendChild(card);
  container.appendChild(link);
});
//______________________________________________________________________________________
function togglePassword(id) {
  const passwordInput = document.getElementById(id);
  const icon = document.querySelector(`#${id} + .toggle-password img`);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.src = "open-eye.png";
  } else {
    passwordInput.type = "password";
    icon.src = "closed-eye.png";
  }
}

document.getElementById("switch-to-signup").addEventListener("click", () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  // document.getElementById("dialog-content").classList.remove("login-mode");
});

document.getElementById("switch-to-login").addEventListener("click", () => {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  // document.getElementById("dialog-content").classList.add("login-mode");
});

document.getElementById("openFormBtn").addEventListener("click", () => {
  document.getElementById("light").showModal();
});

// Close add service dialog when clicking outside
const lightDialog = document.getElementById("light");

lightDialog.addEventListener("click", (e) => {
  const rect = lightDialog.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    lightDialog.close();
  }
});
// -----------------------------------------------------------------
window.onload = function () {
  const fieldSelect = document.getElementById("field");
  const fieldDoc = document.getElementById("fielddoc");
  const fieldPro = document.getElementById("fieldpro");
  const fieldEng = document.getElementById("fieldeng");
  const fieldTeach = document.getElementById("fieldteach");

  const form = document.getElementById("addform");
  const addButton = document.getElementById("bt_send");
  const closeButton = document.getElementById("bt_close");

  const nameInput = document.getElementById("uname");
  const descInput = document.getElementById("dec");
  const imgInput = document.getElementById("imgg");
  const datetiInput = document.getElementById("dateti");

  const container = document.getElementById("cont_doc");

  // إخفاء جميع التخصصات
  function hideAllSpecialties() {
    fieldDoc.style.display = "none";
    fieldPro.style.display = "none";
    fieldEng.style.display = "none";
    fieldTeach.style.display = "none";
    chapter.style.display = "none";
  }

  // إظهار التخصص المناسب
  fieldSelect.onchange = () => {
    hideAllSpecialties();
    switch (fieldSelect.value) {
      case "طب":
        fieldDoc.style.display = "block";
        chapter.style.display = "block";
        break;
      case "برمجة":
        fieldPro.style.display = "block";
        chapter.style.display = "block";
        break;
      case "انشاء":
        fieldEng.style.display = "block";
        chapter.style.display = "block";
        break;
      case "تعليم":
        fieldTeach.style.display = "block";
        chapter.style.display = "block";
        break;
    }
  };

  hideAllSpecialties(); // عند التحميل

  addButton.addEventListener("click", function (e) {
    //عند الضغط على اضافة  يحدث هدا الحدث
    e.preventDefault();
    //لاخد محتويات من صفحة اضافة الخدمه
    const name = nameInput.value.trim();
    const dtime = datetiInput.value.trim();
    const field = fieldSelect.value;
    const desc = descInput.value.trim();
    const img = imgInput.value.trim();

    let specialty = "";
    switch (field) {
      case "طب":
        specialty = fieldDoc.value;
        break;
      case "برمجة":
        specialty = fieldPro.value;
        break;
      case "انشاء":
        specialty = fieldEng.value;
        break;
      case "تعليم":
        specialty = fieldTeach.value;
        break;
    }

    if (!name || !field || !specialty || !desc || !dtime) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    // لتحويل القيم إلى رابط
    const params = new URLSearchParams({
      name: name,
      specialty: specialty,
      desc: desc,
      img: img,
      dtime: dtime,
    });
    // لتحديد مكان اضافة الخدمه حسب المجال
    switch (fieldSelect.value) {
      case "طب":
        window.location.href = "doctorpage.html?" + params.toString(); //خاصية لارسال البيانات لي صفحه اخرة
        break;
      case "برمجة":
        window.location.href = "programmerpage.html?" + params.toString();
        break;
      case "انشاء":
        window.location.href = "engineer.html?" + params.toString();
        break;
      case "تعليم":
        window.location.href = "teacherpage.html?" + params.toString();
        break;
    }

    form.reset(); //لتفريغ محتواى الفورم
    hideAllSpecialties();
    document.getElementById("light").close();
  });
  //عند الضغط يقوم باغلاق الصفحة
  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("light").close();
  });
};
//------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.createElement("button");
  burger.className = "burger-menu";
  burger.innerHTML = "☰";
  burger.setAttribute("aria-label", "قائمة التنقل");

  const nav = document.querySelector("nav");
  const navLinks = document.querySelector(".nav-links");

  nav.appendChild(burger);

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    burger.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 500) {
      navLinks.classList.remove("active");
      burger.innerHTML = "☰";
    }
  });
});

//__________________________________________________________________

function filterServices() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {
    const serviceName = card
      .querySelector(".card-content")
      .textContent.toLowerCase();
    card.parentElement.style.display = serviceName.includes(searchTerm)
      ? "block"
      : "none";
  });
}

document
  .getElementById("search-input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.keyCode === 13 || e.which === 13) {
      filterServices();
      e.preventDefault(); // لمنع أي سلوك افتراضي قد يحدث
    }
  });

document.getElementById("search-input").addEventListener("input", function () {
  if (this.value === "") {
    document.querySelectorAll(".service-card").forEach((card) => {
      card.parentElement.style.display = "block";
    });
  }
});
