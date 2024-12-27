// تابع برای نمایش/مخفی کردن منو همبرگری
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

// اسکرول به بخش "درباره"
// وقتی که روی لینک "درباره" کلیک می‌شود، به انتهای صفحه اسکرول می‌کنیم
document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // از بارگذاری مجدد صفحه جلوگیری می‌کند
    window.scrollTo({
        top: document.body.scrollHeight, // اسکرول به پایین‌ترین قسمت صفحه
        behavior: 'smooth' // با افکت صاف (smooth)
    });
});

// تابع برای تغییر حالت دارک و لایت مود
function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const icon = darkModeBtn.querySelector('i');

    // تغییر حالت دارک و لایت مود
    body.classList.toggle('dark-mode');

    // تغییر آیکون دکمه
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // ذخیره وضعیت دارک مود در localStorage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        // ذخیره وضعیت لایت مود در localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
}

// بررسی وضعیت دارک مود از localStorage هنگام بارگذاری صفحه
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const darkModeBtn = document.getElementById('dark-mode-btn');
        const icon = darkModeBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
    }
};

// تابع برای اسکرول به بالا
function scrollToTop() {
    window.scrollTo({
        top: 0,  // به بالای صفحه برو
        behavior: 'smooth'  // با افکت صاف
    });
}

// نمایش یا مخفی کردن دکمه اسکرول به بالا بر اساس موقعیت صفحه
window.onscroll = function() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";  // نمایش دکمه
    } else {
        scrollBtn.style.display = "none";   // مخفی کردن دکمه
    }
};

const book = document.querySelector('.book');

let rotationX = 0; // زاویه اولیه حول محور X
let rotationY = 0; // زاویه اولیه حول محور Y
let isMouseDown = false; // وضعیت نگه داشتن کلید ماوس
let startX, startY; // موقعیت اولیه

// شروع چرخش با نگه‌داشتن کلید ماوس
document.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
});

// چرخش هنگام حرکت ماوس و نگه‌داشتن کلید
document.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    rotationY += deltaX * 0.5; // تغییر زاویه حول محور Y
    rotationX -= deltaY * 0.5; // تغییر زاویه حول محور X

    book.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    startX = e.clientX;
    startY = e.clientY;
  }
});

// متوقف کردن چرخش وقتی کلید ماوس رها می‌شود
document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// اضافه کردن قابلیت لمسی (برای موبایل)
document.addEventListener('touchstart', (e) => {
  isMouseDown = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
  if (isMouseDown) {
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    rotationY += deltaX * 0.5; // تغییر زاویه حول محور Y
    rotationX -= deltaY * 0.5; // تغییر زاویه حول محور X

    book.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }
});

document.addEventListener('touchend', () => {
  isMouseDown = false;
});

