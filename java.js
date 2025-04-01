
// انتظر تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
  // الحصول على روابط الكتب والتصنيفات من شريط التنقل
  const booksLink = document.querySelector('nav ul li:nth-child(2) a');
  const categoriesLink = document.querySelector('nav ul li:nth-child(3) a');
  
  // الحصول على قسم أحدث الإضافات
  const latestBooksSection = document.querySelector('section:nth-of-type(2)');
  const categories = document.querySelector('section:nth-of-type(4)');
  
  // إضافة مستمع حدث للنقر على رابط "الكتب"
  if (booksLink) {
      booksLink.addEventListener('click', function(e) {
          e.preventDefault(); // منع السلوك الافتراضي للرابط
          
          // التمرير بسلاسة إلى قسم أحدث الإضافات
          latestBooksSection.scrollIntoView({ 
              behavior: 'smooth' 
          });
      });
  }
  
  // إضافة مستمع حدث للنقر على رابط "التصنيفات"
  if (categoriesLink) {
      categoriesLink.addEventListener('click', function(e) {
          e.preventDefault(); // منع السلوك الافتراضي للرابط
          
          // التمرير بسلاسة إلى قسم أحدث الإضافات
          categories.scrollIntoView({ 
              behavior: 'smooth' 
          });
      });
  }
  
  // إضافة وظيفة تسجيل الدخول الموجودة (للحفاظ على الوظائف الموجودة)
  const showLoginButtons = document.querySelectorAll('#showLogin');
  const loginModal = document.getElementById('loginn');
  const closeLoginButton = document.getElementById('close_login');
  
  // الكود الموجود سابقاً للتعامل مع نافذة تسجيل الدخول
  if (showLoginButtons && loginModal) {
      showLoginButtons.forEach(button => {
          button.addEventListener('click', function() {
              loginModal.classList.remove('hidden');
          });
      });
  }
  
  if (closeLoginButton && loginModal) {
      closeLoginButton.addEventListener('click', function() {
          loginModal.classList.add('hidden');
      });
  }
  
  // إضافة وظائف أخرى حسب الحاجة
});

// سكريبت زر العودة إلى الأعلى
const backToTopButton = document.getElementById('back-to-top');

// إظهار الزر عندما يتم التمرير لأسفل
window.addEventListener('scroll', function() {
    // إذا تم التمرير لأسفل أكثر من 300 بكسل
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// العودة إلى أعلى الصفحة عند النقر على الزر
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تغير مكان تسجيل الدخول والعكس 
const loginButton = document.getElementById('login-tab');
const registerButton = document.getElementById('register-tab');
const loginform = document.getElementById('login-form');
const registerform = document.getElementById('register-form');

loginButton.addEventListener('click', function() {

    loginButton.classList.remove('border-gray-200');
    loginButton.classList.remove('text-gray-500');
    loginButton.classList.add('border-[#ff9c00]');
    loginButton.classList.add('text-[#ff9c00]');
    
    registerButton.classList.remove('border-[#ff9c00]');
    registerButton.classList.remove('text-[#ff9c00]');
    registerButton.classList.add('border-gray-200');
    registerButton.classList.add('text-gray-500');

    registerform.classList.add('hidden');
    loginform.classList.remove('hidden');
});

registerButton.addEventListener('click', function() {

    registerButton.classList.remove('border-gray-200');
    registerButton.classList.remove('text-gray-500');
    registerButton.classList.add('border-[#ff9c00]');
    registerButton.classList.add('text-[#ff9c00]');
    
    loginButton.classList.remove('border-[#ff9c00]');
    loginButton.classList.remove('text-[#ff9c00]');
    loginButton.classList.add('border-gray-200');
    loginButton.classList.add('text-gray-500');

    loginform.classList.add('hidden');
    registerform.classList.remove('hidden');
});