const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  index = i;
}

dots.forEach((d,i)=>d.onclick=()=>showSlide(i));

setInterval(()=>{
  showSlide((index+1)%slides.length);
},4500);



document.querySelectorAll(".project-item").forEach(item => {
  const btn = item.querySelector(".play-btn");
  const videoWrapper = item.querySelector(".video-wrapper");
  const video = item.querySelector("video");
  const closeBtn = item.querySelector(".close-video");

  btn.addEventListener("click", () => {
    videoWrapper.style.display = "block";
    video.currentTime = 0;
    video.play();
  });

  closeBtn.addEventListener("click", () => {
    video.pause();
    videoWrapper.style.display = "none";
  });
});


const slider = document.querySelector('.projects-scroll');

slider.addEventListener('wheel', function(e) {
  e.preventDefault();

  const isRtl = getComputedStyle(slider).direction === 'rtl';
  const scrollAmount = isRtl ? -e.deltaY : e.deltaY;

  slider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}, { passive: false });

document.addEventListener("DOMContentLoaded", function(){

  const map = L.map('map').setView([24.813174546502665,46.60902763154743],12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
  }).addTo(map);

  map.dragging.disable();
  map.scrollWheelZoom.disable();
  map.doubleClickZoom.disable();
  map.keyboard.disable();
  map.zoomControl.remove();

  const projects=[
    {name:"فرساي 1",lat:24.813174546502665,lng:46.60902763154743,desc:"توثيق ميداني لكل مراحل المشروع",img:"about_section.jpg",link:"project.html?id=versaisa_1"},
    {name:"فرساي 2",lat:24.808273369315476,lng:46.5923057962587,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_2"},
    {name:"فرساي 3",lat:24.805672701262356,lng:46.600231380915154,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_3"},
    {name:"فرساي 4",lat:24.81368014452884,lng:46.608326611602024,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_4"},
    {name:"فرساي 5",lat:24.70485492781197,lng:46.63333653858387,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_5"},
    {name:"فرساي 6",lat:24.829764528944963,lng:46.586755215017604,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_6"},
    {name:"فرساي 7",lat:24.8641283994999,lng:46.669576911603365,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_7"},
    {name:"فرساي 8",lat:24.90304032900168,lng:46.63807704229119,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_8"},
    {name:"فرساي 9",lat:24.82668378529411,lng:46.58851806557257,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_9"},
    {name:"فرساي 10",lat:24.774122006681125,lng:46.61213619625765,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_10"},
    {name:"فرساي 11",lat:24.816651087452883,lng:46.60015530975139,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_11"},
    {name:"فرساي 12",lat:24.842929510247618,lng:46.67072513858797,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_12"},
    {name:"فرساي 13",lat:24.859258220354423,lng:46.65633513858835,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_13"},
    {name:"فرساي 14",lat:24.815341941915857,lng:46.59038193858727,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_14"},
    {name:"فرساي 15",lat:24.82176383512652,lng:46.624276496259085,desc:"تغطية كاملة لمراحل التنفيذ",img:"about_section.jpg",link:"project.html?id=versaisa_15"}
  ];

  projects.forEach(p=>{
    const icon = L.divIcon({
      className:'',
      html:`<div class="custom-marker"></div>`,
      iconSize:[20,20]
    });

    L.marker([p.lat,p.lng],{icon}).addTo(map)
      .bindPopup(`
        <div class="popup-box">
          <h3>${p.name}</h3>
          <img src="${p.img}">
          <p>${p.desc}</p>
          <a href="${p.link}" target="_blank">عرض المشروع</a>
        </div>
      `)
      .bindTooltip(p.name,{
        permanent:true,
        direction:"top",
        offset:[0,-15],
        className:"marker-tooltip"
      });
  });

  const overlay=document.getElementById("mapOverlay");
  const openBtn=document.getElementById("openMapBtn");
  const closeBtn=document.getElementById("closeMapBtn");

  openBtn.onclick=()=>{
    overlay.style.display="none";
    closeBtn.style.display="block";
    map.dragging.enable();
    map.scrollWheelZoom.enable();
    map.doubleClickZoom.enable();
    map.keyboard.enable();
    map.zoomControl.addTo(map);
  };

  closeBtn.onclick=()=>{
    overlay.style.display="flex";
    closeBtn.style.display="none";
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.keyboard.disable();
    map.zoomControl.remove();
  };

});


const counters_1 = document.querySelectorAll('.success-number');
const speed = 200; 

const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return bounding.top < window.innerHeight && bounding.bottom >= 0;
};

const runCounter = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

let counterRun = false;
window.addEventListener('scroll', () => {
  if (!counterRun) {
    counters_1.forEach(counter => {
      if (isInViewport(counter)) {
        runCounter(counter);
        counterRun = true;
      }
    });
  }
});
/***************************** */
