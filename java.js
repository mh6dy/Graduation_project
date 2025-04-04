
// انتظر تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
  // الحصول على روابط الكتب والتصنيفات من شريط التنقل
  const booksLink = document.querySelector('nav ul li:nth-child(2) a');
  const categoriesLink = document.querySelector('nav ul li:nth-child(3) a');
  const MaSaLink = document.querySelector('nav ul li:nth-child(4) a');
  
  
  // الحصول على قسم أحدث الإضافات
  const latestBooksSection = document.querySelector('section:nth-of-type(2)');
  const categories = document.querySelector('section:nth-of-type(4)');
  const MaSaLSection = document.querySelector('section:nth-of-type(5)');
  
  
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
    const robotBg = document.querySelector('.robot-bg');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in view - show the robot with animation
                robotImage.classList.add('show');
                robotBg.classList.add('show');
            } else {
                // Element is out of view - hide the robot
                robotImage.classList.remove('show');
                robotBg.classList.remove('show');
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
            <div class="bg-[#ff9c00] p-3 rounded-lg shadow max-w-xs md:max-w-md text-white">
                <p>${message}</p>
            </div>
            <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <i class="fas fa-user text-white"></i>
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
                <div class="w-8 h-8 rounded-full bg-[#ff9c00] flex items-center justify-center ml-2">
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
            response = 'تقدم المكتبة الإلكترونية مجموعة متنوعة من الكتب في مختلف المجالات مثل الروايات، العلوم، التاريخ، الفلسفة وغيرها. يمكنك قراءة الكتب مباشرة عبر الإنترنت أو تنزيلها للقراءة لاحقاً. كما توفر المكتبة خدمات مثل البحث المتقدم، توصيات القراءة، وتتبع تقدم القراءة.';
        } 
        else if (message.includes('الأقسام') || message.includes('التصنيفات')) {
            response = 'تتضمن المكتبة الإلكترونية العديد من الأقسام والتصنيفات مثل: الروايات، العلوم، التاريخ، الفلسفة، علم النفس، التطوير الذاتي، الأدب، الدين، السياسة، والكثير غيرها. يمكنك تصفح هذه الأقسام من خلال صفحة التصنيفات.';
        }
        else if (message.includes('اقتراح') || message.includes('كتب للقراءة')) {
            response = 'بالتأكيد! يمكنني اقتراح بعض الكتب بناءً على اهتماماتك. من أحدث الإضافات لدينا: "تحت أجنحة البرزخ" للكاتب عبد الرزاق الحجامي، "السباحة عكس التيار" للسيد محسن المدرسي، "فلسفتنا" للسيد محمد باقر الصدر. هل تبحث عن موضوع معين؟';
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