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
