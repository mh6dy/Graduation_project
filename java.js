 // تحريك العناصر عند التمرير
 document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-right');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // تشغيل عند تحميل الصفحة
});

// انتظر تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
  // الحصول على روابط الكتب والتصنيفات من شريط التنقل
  const booksLink = document.querySelector('nav ul li:nth-child(2) a');
  const categoriesLink = document.querySelector('nav ul li:nth-child(3) a');
  const MaSaLink = document.querySelector('nav ul li:nth-child(4) a');
  
  
  // الحصول على قسم أحدث الإضافات
  const latestBooksSection = document.querySelector('section:nth-of-type(2)');
  const categories = document.querySelector('section:nth-of-type(3)');
  const MaSaLSection = document.querySelector('section:nth-of-type(4)');
  
  
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
  
  // إضافة مستمع حدث للنقر على رابط "تحدث مع MaSa AI"
  if (MaSaLink) {
    MaSaLink.addEventListener('click', function(e) {
          e.preventDefault(); // منع السلوك الافتراضي للرابط
          
          // التمرير بسلاسة إلى قسم أحدث الإضافات
          MaSaLSection.scrollIntoView({ 
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

    // hello
  
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

function loader() {
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut() {
    setTimeout(loader, 4000); // تفعيل دالة loader بعد 4 ثواني
  }
  
  // لتشغيل الـ loader عند تحميل الصفحة
  window.onload = fadeOut;
  
  

 // Intersection Observer for robot animation
 document.addEventListener('DOMContentLoaded', function() {
    const robotImage = document.querySelector('.robot-animation');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view - show the robot with animation
                robotImage.classList.add('show');
                
            } else {
                // Element is out of view - hide the robot
                robotImage.classList.remove('show');
                
            }
        });
    }, {
        // Trigger when at least 30% of the element is visible
        threshold: 0.3
    });
    
    // Start observing the robot image
    if (robotImage) {
        observer.observe(robotImage.parentElement);
    }
});

// Script para la funcionalidad del chat
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.getElementById('closeChat');
    const chatMessages = document.getElementById('chatMessages');
    const userMessageInput = document.getElementById('userMessage');
    const sendMessageBtn = document.getElementById('sendMessage');
    const predefinedQuestions = document.querySelectorAll('.predefined-question');
    
    // Vincular el botón "تحدث مع MaSa AI الآن" para abrir el chat
    const openChatButton = document.querySelector('a[href="masa-ai.html"]');
    if (openChatButton) {
        openChatButton.addEventListener('click', function(e) {
            e.preventDefault();
            chatModal.classList.remove('hidden');
        });
    }
    
    // Cerrar el chat
    closeChat.addEventListener('click', function() {
        chatModal.classList.add('hidden');
    });
    
    // Función para añadir un mensaje del usuario
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex mb-4 justify-end';
        messageElement.innerHTML = `
            <div class="p-4 bg-blue-800 text-slate-50  rounded-t-lg flex justify-between items-center">
                <p>${message}</p>
            </div>
            <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <i class="fas fa-user text-slate-50 "></i>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Función para añadir una respuesta del robot
    function addBotResponse(message) {
        // Simular retraso en la respuesta para dar un efecto más realista
        setTimeout(() => {
            const messageElement = document.createElement('div');
            messageElement.className = 'flex mb-4';
            messageElement.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center ml-2">
                    <i class="fas fa-robot text-white"></i>
                </div>
                <div class="bg-white p-3 rounded-lg shadow max-w-xs md:max-w-md">
                    <p>${message}</p>
                </div>
            `;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 600);
    }
    
    // Función para procesar el mensaje del usuario y obtener una respuesta
    function processUserMessage(message) {
        let response = '';
        
        // Respuestas predefinidas basadas en palabras clave
        if (message.includes('تقدم المكتبة') || message.includes('ماذا تقدم')) {
            response = 'تقدّم مكتبة علوم الحاسوب الإلكترونية مجموعة شاملة من الكتب والمحاضرات والملخصات الأكاديمية المصنّفة حسب المراحل الدراسية من الأولى إلى الرابعة. يمكنك تصفح المحتوى وقراءته مباشرة عبر الإنترنت أو تنزيله للدراسة لاحقًا. كما توفّر المكتبة ميزات مثل البحث المتقدم، توصيات المواد، وتتبع التقدّم الأكاديمي لكل مرحلة.';
        } 
        else if (message.includes('الأقسام') || message.includes('التصنيفات')) {
            response = 'تتضمن مكتبة علوم الحاسوب مجموعة من المواد الدراسية المصنّفة حسب المراحل الأكاديمية، بدءًا من المرحلة الأولى وحتى المرحلة الرابعة. يمكنك تصفح محتوى كل مرحلة والاطلاع على المحاضرات، الكتب، والمراجع الخاصة بها من خلال صفحة المراحل.';
        }
        else if (message.includes('اقتراح') || message.includes('كتب للقراءة')) {
            response = `
                <div style="direction: rtl; font-family: Arial, sans-serif;">
                    📚 <strong>إليك بعض الكتب الرائعة التي قد تهمّك:</strong><br><br>
                    <span style="color:#007bff;">1️⃣</span> <strong>Artificial Intelligence</strong> – <em>Chris Neil</em><br>
                    <span style="color:#007bff;">2️⃣</span> <strong>Object-Oriented Programming in C++</strong> – <em>Nicolai M. Josuttis</em><br>
                    <span style="color:#007bff;">3️⃣</span> <strong>Machine Learning for Beginners</strong> – <em>Chris Sebastian</em><br><br>
                    🔍 هل هناك موضوع محدد ترغب أن أساعدك في استكشاف كتب عنه؟
                </div>
            `;
        }
        
        
        
        else {
            response = 'شكراً لسؤالك! يمكنني مساعدتك في العثور على الكتب، اقتراح قراءات مناسبة، أو الإجابة على استفساراتك حول محتوى المكتبة. هل يمكنني مساعدتك بشيء آخر؟';
        }
        
        return response;
    }
    
    // Evento para el botón de enviar mensaje
    sendMessageBtn.addEventListener('click', function() {
        const message = userMessageInput.value.trim();
        if (message) {
            addUserMessage(message);
            const response = processUserMessage(message);
            addBotResponse(response);
            userMessageInput.value = '';
        }
    });
    
    // Permitir enviar mensaje con Enter
    userMessageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessageBtn.click();
        }
    });
    
    // Eventos para las preguntas predefinidas
    predefinedQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const questionText = this.textContent.trim();
            addUserMessage(questionText);
            const response = processUserMessage(questionText);
            addBotResponse(response);
        });
    });
});

// تفعيل أزرار التحكم بالتمرير
document.querySelectorAll('.scroll-left').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.getElementById(this.getAttribute('data-target'));
        target.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

document.querySelectorAll('.scroll-right').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.getElementById(this.getAttribute('data-target'));
        target.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

// إضافة تأثير hover للكتب
document.querySelectorAll('.book-card').forEach(book => {
    book.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    book.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

function scrollBooks(arrow, scrollAmount) {
    // الحصول على حاوية الرف
    const shelfContainer = arrow.closest('.shelf-container');
    
    // الحصول على شريط الكتب داخل حاوية الرف
    const booksSlider = shelfContainer.querySelector('.books-slider');
    
    // تمرير الكتب بالقيمة المحددة
    booksSlider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  
  //تاثير الوضع الليلي والنهاري
  document.addEventListener('DOMContentLoaded', function() {
    // إضافة استدعاء لحالة الوضع المفضل من localStorage عند تحميل الصفحة
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
        enableDarkMode();
    }
    
    // إضافة مستمع للنقر على زر تبديل الوضع
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        const body = document.body;
        
        if (!body.classList.contains('dark-mode')) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });
    
    // دالة تفعيل الوضع الليلي
    function enableDarkMode() {
        const body = document.body;
        const darkModeButton = document.getElementById('darkModeToggle');
        const header = document.querySelector('header');
        const loginButton = document.getElementById('showLogin');
        
        // تطبيق الوضع الليلي على العناصر الرئيسية
        body.classList.add('dark-mode');
        header.classList.remove('bg-blue-800');
        header.classList.add('bg-gray-900');
        
        // تغيير أيقونة الزر
        darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeButton.classList.remove('bg-blue-700');
        darkModeButton.classList.add('bg-gray-700');
        
        // تغيير لون زر تسجيل الدخول
        if (loginButton) {
            loginButton.classList.remove('bg-white', 'text-blue-800', 'hover:bg-gray-100');
            loginButton.classList.add('bg-gray-700', 'text-white', 'hover:bg-gray-600');
        }
        
        // تغيير ألوان العناصر الأخرى
        document.querySelectorAll('.bg-blue-50').forEach(el => {
            el.classList.remove('bg-blue-50');
            el.classList.add('bg-gray-800');
        });
        
        document.querySelectorAll('.bg-white').forEach(el => {
            el.classList.remove('bg-white');
            el.classList.add('bg-gray-800');
        });
        
        document.querySelectorAll('.bg-gray-50').forEach(el => {
            el.classList.remove('bg-gray-50');
            el.classList.add('bg-gray-900');
        });
        
        document.querySelectorAll('.bg-gray-100').forEach(el => {
            el.classList.remove('bg-gray-100');
            el.classList.add('bg-gray-800');
        });
        
        document.querySelectorAll('.bg-blue-100').forEach(el => {
            el.classList.remove('bg-blue-100');
            el.classList.add('bg-gray-700');
        });
        
        // تغيير ألوان النصوص
        document.querySelectorAll('.text-gray-800').forEach(el => {
            el.classList.remove('text-gray-800');
            el.classList.add('text-white');
        });
        
        document.querySelectorAll('.text-gray-600, .text-gray-700').forEach(el => {
            el.classList.remove('text-gray-600', 'text-gray-700');
            el.classList.add('text-gray-300');
        });
        
        // تعديل ألوان الرفوف والكتب
        document.querySelectorAll('.book-card').forEach(el => {
            el.style.backgroundColor = '#1f2937'; // اللون الرمادي الداكن
            el.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
        });
        
        // حفظ التفضيل في localStorage
        localStorage.setItem('darkMode', 'dark');
    }
    
    // تعديل دالة enableLightMode لتعالج الأقسام بشكل صحيح
    function enableLightMode() {
        const body = document.body;
        const darkModeButton = document.getElementById('darkModeToggle');
        const header = document.querySelector('header');
        const loginButton = document.getElementById('showLogin');
        
        // إلغاء الوضع الليلي
        body.classList.remove('dark-mode');
        header.classList.remove('bg-gray-900');
        header.classList.add('bg-blue-800');
        
        // تغيير أيقونة الزر
        darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeButton.classList.remove('bg-gray-700');
        darkModeButton.classList.add('bg-blue-700');
        
        // إعادة تعيين لون زر تسجيل الدخول
        if (loginButton) {
            loginButton.classList.remove('bg-gray-700', 'text-white', 'hover:bg-gray-600');
            loginButton.classList.add('bg-white', 'text-blue-800', 'hover:bg-gray-100');
        }
        
        // إعادة تعيين نافذة تسجيل الدخول
        const loginModal = document.getElementById('loginn');
        if (loginModal) {
            // إعادة تعيين خلفية النافذة
            loginModal.querySelectorAll('.bg-gray-800').forEach(el => {
                el.classList.remove('bg-gray-800');
                el.classList.add('bg-white');
            });
            
            // إعادة تعيين لون النصوص
            loginModal.querySelectorAll('.text-white:not(.bg-blue-800 *)').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-800');
            });
            
            // إعادة تعيين حقول الإدخال
            loginModal.querySelectorAll('input').forEach(input => {
                input.style.backgroundColor = '';
                input.style.borderColor = '';
                input.style.color = '';
            });
        }
        
        // إعادة تعيين نافذة الملف الشخصي إذا كانت مفتوحة
        const profileModal = document.getElementById('profile-modal');
        if (profileModal) {
            profileModal.querySelectorAll('.bg-gray-800, .bg-gray-900').forEach(el => {
                el.classList.remove('bg-gray-800', 'bg-gray-900');
                el.classList.add('bg-white');
            });
            
            profileModal.querySelectorAll('.text-white').forEach(el => {
                if (!el.closest('.bg-blue-800')) {
                    el.classList.remove('text-white');
                    el.classList.add('text-gray-800');
                }
            });
            
            profileModal.querySelectorAll('.text-gray-300').forEach(el => {
                el.classList.remove('text-gray-300');
                el.classList.add('text-gray-600');
            });
        }
    
        // إعادة تعيين قائمة المستخدم إذا كانت مفتوحة
        const userMenu = document.getElementById('user-menu');
        if (userMenu) {
            userMenu.classList.remove('bg-gray-800');
            userMenu.classList.add('bg-white');
            
            userMenu.querySelectorAll('.text-white').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-700');
            });
            
            userMenu.querySelectorAll('.text-gray-300').forEach(el => {
                el.classList.remove('text-gray-300');
                el.classList.add('text-gray-500');
            });
            
            userMenu.querySelectorAll('.hover\\:bg-gray-600').forEach(el => {
                el.classList.remove('hover:bg-gray-600');
                el.classList.add('hover:bg-gray-100');
            });
        }
        
        // استعادة ألوان الأقسام بشكل محدد
        // استعادة قسم Hero (البداية)
        const heroSection = document.querySelector('section.py-12:first-of-type');
        if (heroSection) {
            heroSection.classList.remove('bg-gray-800', 'bg-gray-900');
            heroSection.classList.add('bg-blue-50');
        }
        
        // استعادة قسم أحدث الإضافات
        const latestBooksSection = document.querySelector('section.py-12:nth-of-type(2)');
        if (latestBooksSection) {
            latestBooksSection.classList.remove('bg-gray-800', 'bg-gray-900');
            latestBooksSection.classList.add('bg-white');
        }
        
        // استعادة قسم تصفح حسب المرحلة الدراسية
        const categoriesSection = document.querySelector('section.py-12:nth-of-type(3)');
        if (categoriesSection) {
            categoriesSection.classList.remove('bg-gray-800', 'bg-gray-900');
            categoriesSection.classList.add('bg-white');
            
            // استعادة بطاقات المراحل الدراسية
            categoriesSection.querySelectorAll('.bg-gray-800').forEach(el => {
                if (!el.closest('footer')) {
                    el.classList.remove('bg-gray-800');
                    el.classList.add('bg-white');
                }
            });
            
            // استعادة خلفيات الأيقونات في المراحل الدراسية
            categoriesSection.querySelectorAll('.bg-gray-700').forEach(el => {
                el.classList.remove('bg-gray-700');
                el.classList.add('bg-blue-100');
            });
        }
        
        // استعادة قسم MaSa AI
        const masaAISection = document.querySelector('section.py-12.bg-gray-800, section.py-12.bg-gray-900');
        if (masaAISection) {
            masaAISection.classList.remove('bg-gray-800', 'bg-gray-900');
            masaAISection.classList.add('bg-gray-100');
        }
        
        // استعادة ألوان النصوص بشكل عام
        document.querySelectorAll('.text-white').forEach(el => {
            // تجاهل النصوص في الهيدر والفوتر وأي عناصر زرقاء
            if (!el.closest('header') && !el.closest('footer') && !el.closest('.bg-blue-800')) {
                el.classList.remove('text-white');
                el.classList.add('text-gray-800');
            }
        });
        
        document.querySelectorAll('.text-gray-300').forEach(el => {
            el.classList.remove('text-gray-300');
            el.classList.add('text-gray-600');
        });
        
        // استعادة مظهر بطاقات الكتب
        document.querySelectorAll('.book-card').forEach(el => {
            el.style.backgroundColor = 'white';
            el.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        // استعادة نافذة الدردشة
        const chatModal = document.getElementById('chatModal');
        if (chatModal) {
            chatModal.querySelectorAll('.bg-gray-800, .bg-gray-900').forEach(el => {
                if (el.classList.contains('bg-gray-50')) {
                    el.classList.remove('bg-gray-800', 'bg-gray-900');
                    el.classList.add('bg-gray-50');
                } else {
                    el.classList.remove('bg-gray-800', 'bg-gray-900');
                    el.classList.add('bg-white');
                }
            });
            
            chatModal.querySelectorAll('.text-white:not(.bg-blue-800 *)').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-gray-800');
            });
        }
        
        // حفظ التفضيل في localStorage
        localStorage.setItem('darkMode', 'light');
    }
});

// إضافة أنماط CSS للوضع الليلي
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #111827;
        color: #f3f4f6;
    }
    
    body.dark-mode .bg-blue-800:not(header):not(button):not(.nav-arrow) {
        background-color: #1e3a8a !important;
    }
    
    body.dark-mode .text-blue-800 {
        color: #60a5fa;
    }
    
    body.dark-mode .hover\\:bg-blue-900:hover {
        background-color: #1e3a8a !important;
    }
    
    body.dark-mode #loginn .bg-white {
        background-color: #1f2937 !important;
    }
    
    body.dark-mode #loginn .text-gray-700,
    body.dark-mode #loginn .text-gray-600,
    body.dark-mode #loginn .text-gray-500 {
        color: #e5e7eb !important;
    }
    
    body.dark-mode #loginn input {
        background-color: #374151;
        border-color: #4b5563;
        color: white;
    }
    
    body.dark-mode #chatModal .bg-white {
        background-color: #1f2937 !important;
    }
    
    body.dark-mode #chatModal .bg-gray-50 {
        background-color: #111827 !important;
    }
    
    body.dark-mode #chatModal .bg-gray-100 {
        background-color: #1f2937 !important;
    }
    
    body.dark-mode #chatModal .text-gray-600 {
        color: #e5e7eb !important;
    }
    
    body.dark-mode #chatModal .bg-white {
        background-color: #374151 !important;
    }
    
    /* تصحيح مظهر زر تسجيل الدخول في الوضع الليلي */
    body.dark-mode #showLogin.bg-gray-700 {
        background-color: #374151 !important;
    }
    
    body.dark-mode #showLogin.hover\\:bg-gray-600:hover {
        background-color: #4b5563 !important;
    }
`;
document.head.appendChild(darkModeStyles);