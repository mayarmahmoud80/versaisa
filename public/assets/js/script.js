const projectsData = [
  {
    id: "versaisa_15",
    title: "فرساي 15",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 38,
    percent: 0,
    price: "1,349,000 ر.س",
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/15.jpg",
    images:[ "assets/imgs/project/15.jpg"],
    status: "متاح",
    types: ["أدوار"],
    detailedUnits: [
      { number: "A1", floor: "ارضي - اول ", type:"دورين", area: "168.66 م²", price: "1,699,000", reserved: false },
      { number: "A2", floor: "ارضي - اول ", type:"دورين", area: "161.60 م²", price: "1,699,000", reserved: false },
      { number: "A3", floor: "ارضي - اول ", type:"دورين", area: "160.99 م²", price: "1,699,000", reserved: false },
      { number: "A4", floor: "ارضي - اول ", type:"دورين", area: "248.64 م²", price: "2,199,000", reserved: false },
      { number: "A5", floor: "ارضي - اول ", type:"دورين", area: "176.25 م²", price: "1,799,000", reserved: false },
      { number: "A6", floor: "ارضي - اول ", type:"دورين", area: "173.83 م²", price: "1,829,000", reserved: false },
      { number: "A7", floor: "تاني", type:"دور", area: "181.87 م²", price: "1,599,000", reserved: false },
      { number: "A8", floor: "تاني", type:"دور", area: "126.33 م²", price: "1,349,000", reserved: false },
      { number: "A9", floor: "تاني - ملحق", type:"دورين", area: "315.42 م²", price: "2,349,000", reserved: false },
      { number: "A10", floor: "تاني - ملحق", type:"دورين", area: "186.75 م²", price: "2,149,000", reserved: false },
      { number: "A11", floor: "تاني - ملحق", type:"دورين", area: "306.72 م²", price: "2,299,000", reserved: false },
      { number: "B1", floor: "ارضي - اول ", type:"دورين", area: "210.01 م²", price: "1,949,000", reserved: false },
      { number: "B2", floor: "ارضي - اول ", type:"دورين", area: "218.14 م²", price: "1,899,000", reserved: false },
      { number: "B3", floor: "ارضي - اول ", type:"دورين", area: "209.41 م²", price: "1,949,000", reserved: false },
      { number: "B4", floor: "ارضي - اول ", type:"دورين", area: "203.79 م²", price: "1,949,000", reserved: false },
      { number: "B5", floor: "ارضي - اول ", type:"دورين", area: "211.28 م²", price: "1,999,000", reserved: false },
      { number: "B6", floor: "ارضي - اول ", type:"دورين", area: "148 م²", price: "1,549,000", reserved: false },
      { number: "B7", floor: "تاني", type:"دور", area: "246.68 م²", price: "1,849,000", reserved: false },
      { number: "B8", floor: "تاني", type:"دور", area: "233.25 م²", price: "1,899,000", reserved: false },
      { number: "C1", floor: "ارضي - اول ", type:"دورين", area: "148 م²", price: "1,549,000", reserved: false },
      { number: "C2", floor: "ارضي - اول ", type:"دورين", area: "211.28 م²", price: "1,999,000", reserved: false },
      { number: "C3", floor: "ارضي - اول ", type:"دورين", area: "197.76 م²", price: "1,949,000", reserved: false },
      { number: "C4", floor: "ارضي - اول ", type:"دورين", area: "219.68 م²", price: "1,999,000", reserved: false },
      { number: "C5", floor: "ارضي - اول ", type:"دورين", area: "219.83 م²", price: "1,949,000", reserved: false },
      { number: "C6", floor: "ارضي - اول ", type:"دورين", area: "219.21 م²", price: "1,999,000", reserved: false },
      { number: "C7", floor: "تاني", type:"دور", area: "233.25 م²", price: "1,949,000", reserved: false },
      { number: "C8", floor: "تاني", type:"دور", area: "246.68 م²", price: "1,849,000", reserved: false },
      { number: "D1", floor: "ارضي - اول ", type:"دورين", area: "173.83 م²", price: "1,829,000", reserved: false },
      { number: "D2", floor: "ارضي - اول ", type:"دورين", area: "176.25 م²", price: "1,799,000", reserved: false },
      { number: "D3", floor: "ارضي - اول ", type:"دورين", area: "262.64 م²", price: "2,249,000", reserved: false },
      { number: "D4", floor: "ارضي - اول ", type:"دورين", area: "171.31 م²", price: "1,799,000", reserved: false },
      { number: "D5", floor: "ارضي - اول ", type:"دورين", area: "163.43 م²", price: "1,699,000", reserved: false },
      { number: "D6", floor: "ارضي - اول ", type:"دورين", area: "168.66 م²", price: "1,699,000", reserved: false },
      { number: "D7", floor: "تاني", type:"دور", area: "126.33 م²", price: "1,349,000", reserved: false },
      { number: "D8", floor: "تاني", type:"دور", area: "181.87 م²", price: "1,649,000", reserved: false },
      { number: "D9", floor: "ارضي - اول ", type:"دورين", area: "306.72 م²", price: "2,349,000", reserved: false },
      { number: "D10", floor: "ارضي - اول ", type:"دورين", area: "186.75 م²", price: "2,149,000", reserved: false },
      { number: "D11", floor: "ارضي - اول ", type:"دورين", area: "315.51 م²", price: "2,349,000", reserved: false },
    ]
  },
  {
    id: "versaisa_14",
    title: "فرساي 14",
    city: "الرياض",
    text: "أدوار - تاون هاوس",
    type: ["أدوار", "تاون هاوس"],
    units: 4,
    percent: 60,
    price: "1,890,000 ر.س",
    space: "153.92 - 320.52 م²",
    image: "assets/imgs/project/14.jpg",
    images:[ "assets/imgs/project/14.jpg"],
    status: "متاح",
    types: ["(أدوار)" ,  "(تاون هاوس)"],

    detailedUnits: [
      { number: 1, floor: "ارضي - اول ", type:"بنتهاوس", area: "187.38 م²", price: "مباعة", reserved: true },
      { number: 2, floor: "ارضي - اول ", type:"بنتهاوس", area: "153.92 م²", price: "مباعة", reserved: true },
      { number: 3, floor: "ارضي - اول ", type:"بنتهاوس", area: "244.11 م²", price: "مباعة", reserved: true },
      { number: 4, floor: "ارضي - اول ", type:"بنتهاوس", area: "244.11 م²", price: "2,259,000", reserved: false },
      { number: 5, floor: "ارضي - اول ", type:"بنتهاوس", area: "153.92 م²", price: "مباعة", reserved: true },
      { number: 6, floor: "ارضي - اول ", type:"بنتهاوس", area: "174.11 م²", price: "1,890,000", reserved: false },
      { number: 7, floor: "تاني", type:"دور", area: "177.03 م²", price: "1,980,000", reserved: false },
      { number: 8, floor: "تاني", type:"دور", area: "177.03 م²", price: "1,980,000", reserved: false },
      { number: 9, floor: "تاني - ملحق", type:"بنتهاوس", area: "320.52 م²", price: "مباعة", reserved: true },
      { number: 10, floor: "تاني - ملحق", type:"بنتهاوس", area: "320.52 م²", price: "مباعة", reserved: true }
    ]
  },
    {
    id: "versaisa_1",
    title: "فرساي 1",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/01.jpg",
    images:[ "assets/imgs/project/01.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_2",
    title: "فرساي 2",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/02.jpg",
    images:[ "assets/imgs/project/02.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_3",
    title: "فرساي 3",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/03.jpg",
    images:[ "assets/imgs/project/03.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_4",
    title: "فرساي 4",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/04.jpg",
    images:[ "assets/imgs/project/04.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },{
    id: "versaisa_5",
    title: "فرساي 5",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/05.jpg",
    images:[ "assets/imgs/project/05.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_6",
    title: "فرساي 6",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/06.jpg",
    images:[ "assets/imgs/project/06.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_7",
    title: "فرساي 7",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/07.jpg",
    images:[ "assets/imgs/project/07.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_8",
    title: "فرساي 8",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/08.jpg",
    images:[ "assets/imgs/project/08.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_9",
    title: "فرساي 9",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/09.jpg",
    images:[ "assets/imgs/project/09.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_11",
    title: "فرساي 11",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/11.jpg",
    images:[ "assets/imgs/project/11.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },{
    id: "versaisa_12",
    title: "فرساي 12",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/12.jpg",
    images:[ "assets/imgs/project/12.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_13",
    title: "فرساي 13",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/13.jpg",
    images:[ "assets/imgs/project/13.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },{
    id: "versaisa_10",
    title: "فرساي 10",
    city: "الرياض",
    text: "أدوار",
    type: ["أدوار"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project/10.jpg",
    images:[ "assets/imgs/project/10.jpg"],
    status: "مباع",
    types: ["أدوار"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_villa",
    title: "فلل فرساي",
    city: "الرياض",
    text: "فلل",
    type: ["فلل"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project_img1.jpg",
    images:[ "assets/imgs/project_img2.jpg"],
    status: "مباع",
    types: ["فلل"],
    detailedUnits: [

    ]
  },
  {
    id: "versaisa_villa_2",
    title: "فلل  المهرة",
    city: "الرياض",
    text: "فلل",
    type: ["فلل"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project_img1.jpg",
    images:[ "assets/imgs/project_img2.jpg"],
    status: "مباع",
    types: ["فلل"],
    detailedUnits: [

    ]
  },{
    id: "versaisa_villa_3",
    title: "فلل النرجس",
    city: "الرياض",
    text: "فلل",
    type: ["فلل"],
    units: 0,
    percent: 100,
    space: "148 - 315.42 م²",
    image: "assets/imgs/project_img1.jpg",
    images:[ "assets/imgs/project_img2.jpg"],
    status: "مباع",
    types: ["فلل"],
    detailedUnits: [

    ]
  },
];

if(document.getElementById("projectsContainer")){

const container = document.getElementById("projectsContainer");

projectsData.forEach(p => {
  container.innerHTML += `
    <div class="project_section border-card-project p-2">
<div class="card" onclick="location.href='project.html?id=${p.id}'">



          <div class="card_img">
          
      ${p.status !== "مباع" ? '<div class="d-none" >' : '<div class="overlay" style="background:transparent; position: absolute; width: 46%; top: 10px; right: 10px; left: 10px;  height: auto; margin:auto;">'}
            <img src="assets/imgs/img_log.png" class="card-img">
          </div>

            <img src="${p.image}" class="card-img h-100">
          </div>

          <div class="card_img_text">
            <div class="card_img_text1">${p.text}</div>
          </div>

          <div id="units-box">
            <div class="d-flex justify-content-between">
              <p class="text-sm m-0">الوحدات المتاحة</p>
              <p class="m-0">${p.units}</p>
            </div>

            <div class="d-flex justify-content-between mt-1">
              <p class="text-sm text-muted m-0">نسبة الحجز</p>
              <p class="m-0">${p.percent}%</p>
            </div>

            <div class="progress mt-2">
              <div class="progress-bar" style="width: ${p.percent}%;"></div>
            </div>
          </div>

          <div class="p-3 my-3">
            <h5 class="text-black bold">${p.title}</h5>
            <p class="text-muted font-16">${p.city}</p>

            <hr class="mt-3 text-muted">

           <div class="project_price d-flex justify-content-between">
  <div>
    <div class="d-flex justify-content-between">
      <span class="d-flex flex-column justify-content-center text-center">
      ${p.status !== "مباع" ? '<i class="text-muted fa-solid fa-money-bill-1"></i>' : ''}   
      
      </span>
      <!-- لو المشروع مباع، لا يظهر هذا النص -->
      ${p.status !== "مباع" ? '<p>أسعار تبدأ من</p>' : ''}
    </div>
    <p class="bold text-black">
      ${p.status === "مباع" ? "تم البيع" : p.price}
    </p>
  </div>

  <div>
    <div class="d-flex justify-content-center">
      <span class="d-flex flex-column justify-content-center text-center">
        <i class="text-muted fa-solid fa-house"></i>
      </span>
      <p>المساحات</p>
    </div>
    <p class="bold text-black">${p.space}</p>
  </div>
</div>


          <div class="card-btn d-flex justify-content-around">
            <a href="https://wa.me/0559604044?text=${encodeURIComponent(`مرحبا، حاب استفسر عن مشروع ( ${p.title})`)}" 
   target="_blank" 
   class="d-block btn-1 col-5 btn mt-3">
   تواصل معنا
</a>

            <a href="#" class="d-block btn-2 col-5 btn mt-3" style="background:rgba(245,245,245,1);">تسجيل اهتمام</a>
          </div>

        </div>
    </div>`;
});


function scrollProjects(direction) {
  const slider = document.getElementById("projectsContainer");
  const cardWidth = slider.querySelector(".project_section")?.offsetWidth || 350;
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}

(function () {
  const slider = document.getElementById("projectsContainer");
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // 🖱️ Mouse Drag فقط
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => isDown = false);
  slider.addEventListener("mouseup", () => isDown = false);

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.2;
    slider.scrollLeft = scrollLeft - walk;
  });
})();


}
else if(document.getElementById("portfolio-projects")){
document.addEventListener("DOMContentLoaded", function() {

  const container_1 = document.getElementById("portfolio-projects");
  let currentType = "الكل";
  let searchValue = "";

  // دالة لعرض المشاريع
  function renderProjects(data) {
    container_1.innerHTML = "";
    if(data.length === 0) {
      container_1.innerHTML = "<p class='text-center'>لا يوجد مشاريع مطابقة</p>";
      return;
    }
    data.forEach(p => {
      container_1.innerHTML +=`
    
          <div class="col-12 col-4 project_section border-card-project p-3">
      <a href="project.html?id=${p.id}">
        <div class="card">
          
          <div class="card_img">
          
          ${p.status !== "مباع" ? '<div class="d-none" >' : '<div class="overlay" style="background:transparent; position: absolute; width: 46%; top: 10px; right: 10px; left: 10px;  height: auto; margin:auto;">'}
            <img src="assets/imgs/img_log.png" class="card-img">
          </div>
          
            <img src="${p.image}" class="card-img h-100">
          </div>

          <div class="card_img_text">
            <div class="card_img_text1">${p.text}</div>
          </div>

          <div id="units-box">
            <div class="d-flex justify-content-between">
              <p class="text-sm m-0">الوحدات المتاحة</p>
              <p class="m-0">${p.units}</p>
            </div>

            <div class="d-flex justify-content-between mt-1">
              <p class="text-sm text-muted m-0">نسبة الحجز</p>
              <p class="m-0">${p.percent}%</p>
            </div>

            <div class="progress mt-2">
              <div class="progress-bar" style="width: ${p.percent}%;"></div>
            </div>
          </div>

          <div class="p-3 my-3">
            <h5 class="text-black bold">${p.title}</h5>
            <p class="text-muted font-16">${p.city}</p>

            <hr class="mt-3 text-muted">

            <div class="project_price d-flex justify-content-between">
  <div>
    <div class="d-flex justify-content-between">
      <span class="d-flex flex-column justify-content-center text-center">
      ${p.status !== "مباع" ? '<i class="text-muted fa-solid fa-money-bill-1"></i>' : ''}   
      
      </span>
      <!-- لو المشروع مباع، لا يظهر هذا النص -->
      ${p.status !== "مباع" ? '<p>أسعار تبدأ من</p>' : ''}
    </div>
    <p class="bold text-black">
      ${p.status === "مباع" ? "تم البيع" : p.price}
    </p>
  </div>

  <div>
    <div class="d-flex justify-content-center">
      <span class="d-flex flex-column justify-content-center text-center">
        <i class="text-muted fa-solid fa-house"></i>
      </span>
      <p>المساحات</p>
    </div>
    <p class="bold text-black">${p.space}</p>
  </div>
</div>


          <div class="card-btn d-flex justify-content-around">
            <a href="https://wa.me/0559604044?text=${encodeURIComponent(`مرحبا، حاب استفسر عن مشروع ( ${p.title})`)}" 
   target="_blank" 
   class="d-block btn-1 col-5 btn mt-3">
   تواصل معنا
</a>

            <a href="#" class="d-block btn-2 col-5 btn mt-3" style="background:rgba(245,245,245,1);">تسجيل اهتمام</a>
          </div>

        </div>
      </a>
    </div>
    
        `;
    });
  }

  // عرض كل المشاريع أول مرة
  renderProjects(projectsData);

  // الفلترة حسب النوع
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      currentType = this.dataset.type;
      applyFilters();
    });
  });

  // البحث
  document.getElementById("projectSearch").addEventListener("input", function(e) {
    searchValue = e.target.value.trim();
    applyFilters();
  });

  // دالة تطبيق الفلاتر
function applyFilters() {
  let filtered = [...projectsData];

  // فلترة النوع
  if (currentType !== "الكل") {
    filtered = filtered.filter(p =>
      p.type && p.type.includes(currentType)
    );
  }

  // البحث بالاسم
  if (searchValue) {
    filtered = filtered.filter(p =>
      p.title.includes(searchValue)
    );
  }

  renderProjects(filtered);
}


});
}


else {let currentPage = 1;
const perPage = 6;
let project; // global variable

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  project = projectsData.find(p => p.id == projectId);

  if(!project) {
    document.getElementById("project_page").innerHTML = "<h2 style='text-align:center'>المشروع غير موجود</h2>";
    return;
  }

  // تعبئة البيانات الأساسية
  document.getElementById("proj-title").textContent = project.title;
  document.getElementById("proj-location").textContent = project.city;
  document.getElementById("summary-space").textContent = project.space;
  document.getElementById("summary-price").textContent = project.price;
  document.getElementById("summary-types").textContent = project.types;
  document.getElementById("summary-city").textContent = project.city;
  
  const statusEl = document.getElementById("summary-status");
  statusEl.textContent = project.status;
  if (project.status === "مباع") {
    statusEl.style.color = "red";
    statusEl.style.fontWeight = "800";
  } else if (project.status === "متاح") {
    statusEl.style.color = "green";
    statusEl.style.fontWeight = "800";
  }

  // عرض الصور
  const imagesContainer = document.getElementById("proj-images");
  imagesContainer.innerHTML = "";
  project.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.alt = project.title;
    imagesContainer.appendChild(image);
  });

  // رابط الواتساب
  const whatsappLink = document.getElementById("whatsapp-link");
  whatsappLink.href =
    "https://wa.me/0559604044?text=" +
    encodeURIComponent(`مرحبا، حاب استفسر عن مشروع (${project.title})`);

  // استدعاء renderUnits للمرة الأولى
  renderUnits();
});

// إعادة رسم الوحدات عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
  if(project) renderUnits();
});

function renderUnits() {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const units = project.detailedUnits.slice(start, end);

  const table = document.querySelector(".units-table");
  const tbody = document.getElementById("units-table-body");
  const mobileContainerId = "mobile-units-container";

  if(window.innerWidth <= 767) {
    // نسخة الموبايل
    if(table) table.style.display = "none";

    let section = document.getElementById(mobileContainerId);
    if (!section) {
      section = document.createElement("section");
      section.id = mobileContainerId;
      section.classList.add("container-fluid");
      table.parentNode.insertBefore(section, table);
    }
    section.innerHTML = "";

    units.forEach(u => {
      section.innerHTML += `
        <div class="row d-flex justify-content-center align-items-center m-2">
          <div class="col-12 my-3" style="border: 1px solid; border-radius: 20px;">
            <div class="col-12 card p-3">
              <div class="d-flex flex-column justify-content-between">
                <div class="row d-flex flex-row justify-content-between mb-3">
                  <div class="col-6 d-flex flex-column">
                    <p class="mb-0">رقم الوحدة</p>
                    <p class="bold text-black">${u.number}</p>
                  </div>
                  <div class="col-6 d-flex flex-column">
                    <p class="mb-0">الدور</p>
                    <p class="bold text-black ">${u.floor}</p>
                  </div>
                </div>
                <div class="row d-flex flex-row justify-content-between">
                  <div class="col-6 d-flex flex-column">
                    <p class="mb-0">المساحة</p>
                    <p class="bold text-black">${u.area}</p>
                  </div>
                  <div class="col-6 d-flex flex-column">
                    <p class="mb-0">السعر</p>
                    <p class="bold text-black">${u.reserved ? 'مباع' : u.price + ' ر.س'}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-center"><hr class="mt-3 text-muted w-100"></div>
                <div class="card-btn d-flex justify-content-around">
                  ${u.reserved ? '' : `<a href="https://wa.me/0559604044?text=حجز وحدة رقم ${u.number} في ${project.title} تقع بالدور ${u.floor} بمساحة ${u.area} م² وسعر ${u.price} ر.س"
                  target="_blank" 
                  class="d-block btn-1 col-5 btn mt-3 w-100">
                  احجز الوحدة
                  </a>`}
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });

  } else {
    // نسخة الديسكتوب
    if(table) table.style.display = "table";
    tbody.innerHTML = "";
    units.forEach(u => {
      tbody.innerHTML += `
        <tr>
          <td>${u.number}</td>
          <td>${u.floor}</td>
          <td>${u.type}</td>
          <td>${u.area}</td>
          <td>${u.reserved ? 'مباع' : u.price + ' ر.س'}</td>
          <td>
            ${u.reserved ? '' : `<a href="https://wa.me/0559604044?text=حجز وحدة رقم ${u.number} في ${project.title} تقع بالدور ${u.floor} بمساحة ${u.area} م² وسعر ${u.price} ر.س"
               target="_blank"
               class="btn btn-secondary">
             احجز الوحدة
             </a>`}
          </td>
        </tr>`;
    });
  }

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(project.detailedUnits.length / perPage);
  const pagination = document.getElementById("pagination");
  if(!pagination) return;

  pagination.innerHTML = "";

  for(let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if(i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderUnits();
    });
    pagination.appendChild(btn);
  }
}

    /*document.addEventListener("DOMContentLoaded", () => {

      

      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("id");
      const project = projectsData.find(p => p.id == projectId);


      if (!project) {
        document.getElementById("project_page").innerHTML = "<h2 style='text-align:center'>المشروع غير موجود</h2>";
        return;
      }

      // تعبئة البيانات
      document.getElementById("proj-title").textContent = project.title;
      document.getElementById("proj-location").textContent = project.city;

      document.getElementById("summary-space").textContent = project.space;
      document.getElementById("summary-price").textContent = project.price;
      document.getElementById("summary-types").textContent = project.types;
      document.getElementById("summary-city").textContent = project.city;
      document.getElementById("summary-status").textContent = project.status;
      const statusEl = document.getElementById("summary-status");
      statusEl.textContent = project.status;

if (project.status === "مباع") {
  statusEl.style.color = "red";
  statusEl.style.fontWeight = "800";
} else if (project.status === "متاح") {
  statusEl.style.color = "green";
  statusEl.style.fontWeight = "800";
}

      // الصور
      const imagesContainer = document.getElementById("proj-images");
      imagesContainer.innerHTML = "";
      project.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        image.alt = project.title;
        imagesContainer.appendChild(image);
      });

      // جدول الوحدات + Pagination
// جدول الوحدات + Pagination
let currentPage = 1;
const perPage = 6;

function renderUnits() {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const units = project.detailedUnits.slice(start, end); // تم تعديلها

  const tbody = document.getElementById("units-table-body");
  tbody.innerHTML = "";

  units.forEach(u => {
    tbody.innerHTML += `
      <tr>
        <td>${u.number}</td>
        <td>${u.floor}</td>
        <td>${u.type}</td>
        <td>${u.area}</td>
        <td>${u.reserved ? 'مباع' : u.price + ' ر.س'}</td>
        <td>
          ${u.reserved ? '' : `<a href="https://wa.me/0559604044?text=حجز وحدة رقم ${u.number} في ${project.title} تقع بالدور ${u.floor} بمساحة ${u.area} م² وسعر ${u.price} ر.س"
             target="_blank"
             class="btn btn-secondary">
           احجز الوحدة
           </a>`}
        </td>
      </tr>
    `;
  });

  renderPagination();
}


const whatsappLink = document.getElementById("whatsapp-link");
const actionsBox = document.getElementById("project-actions");
whatsappLink.href =
  "https://wa.me/0559604044?text=" +
  encodeURIComponent(`مرحبا، حاب استفسر عن مشروع (${project.title})`);


function renderPagination() {
  const totalPages = Math.ceil(project.detailedUnits.length / perPage); // تعديل هنا أيضًا
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderUnits();
    });
    pagination.appendChild(btn);
  }
}

renderUnits();


    });*/
}
