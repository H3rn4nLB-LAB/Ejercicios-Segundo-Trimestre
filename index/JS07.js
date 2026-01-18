const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400"
];

const slider = document.getElementById("slider");
let currentIndex = 0;


images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  slider.appendChild(img);
});


const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function showSlide(index) {
  slider.style.transform = `translateX(-${index * 600}px)`; 
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});
