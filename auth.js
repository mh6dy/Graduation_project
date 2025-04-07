// ملف مصحح: auth.js

// دالة للتحقق من وجود العناصر قبل استخدامها
function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`عنصر بالمحدد '${selector}' غير موجود في الصفحة`);
    }
    return element;
}

// دالة لتسجيل المستخدم
function registerUser(event) {
    event.preventDefault();
    
    // الحصول على قيم نموذج التسجيل
    const registerForm = getElement('#register-form');
    if (!registerForm) return;
    
    const fullNameInput = registerForm.querySelector('input[type="text"]');
    const emailInput = registerForm.querySelector('input[type="email"]');
    const passwordInput = registerForm.querySelector('input[type="password"]');
    const confirmPasswordInput = registerForm.querySelector('input[placeholder="أعد إدخال كلمة المرور"]');
    
    if (!fullNameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
        showAlert('خطأ في العثور على حقول النموذج', 'error');
        return;
    }
    
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    // التحقق الأساسي
    if (!fullName || !email || !password || !confirmPassword) {
        showAlert('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    // التحقق مما إذا كان البريد الإلكتروني مسجلاً بالفعل
    const users = JSON.parse(localStorage.getItem('digitalLibraryUsers') || '[]');
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
        showAlert('البريد الإلكتروني مسجل بالفعل', 'error');
        return;
    }
    
    // إنشاء كائن المستخدم
    const newUser = {
        id: Date.now().toString(),
        fullName,
        email,
        password, // ملاحظة: في الإنتاج، لا تخزن كلمات المرور كنصوص عادية
        createdAt: new Date().toISOString(),
        favorites: []
    };
    
    // الحفظ في localStorage
    users.push(newUser);
    localStorage.setItem('digitalLibraryUsers', JSON.stringify(users));
    
    // رسالة نجاح
    showAlert('تم إنشاء حسابك بنجاح!', 'success');
    
    // مسح النموذج
    registerForm.reset();
    
    // التبديل إلى علامة تبويب تسجيل الدخول
    const loginTab = getElement('#login-tab');
    if (loginTab) loginTab.click();
}

// دالة لتسجيل دخول المستخدم
function loginUser(event) {
    event.preventDefault();
    
    // الحصول على قيم النموذج
    const loginForm = getElement('#login-form');
    if (!loginForm) return;
    
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const rememberMeInput = getElement('#remember-me');
    
    if (!emailInput || !passwordInput) {
        showAlert('خطأ في العثور على حقول النموذج', 'error');
        return;
    }
    
    const email = emailInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeInput ? rememberMeInput.checked : false;
    
    // التحقق من إدخال البيانات
    if (!email || !password) {
        showAlert('يرجى إدخال البريد الإلكتروني وكلمة المرور', 'error');
        return;
    }
    
    // التحقق من بيانات الاعتماد
    const users = JSON.parse(localStorage.getItem('digitalLibraryUsers') || '[]');
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        showAlert('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
        return;
    }
    
    // إنشاء كائن الجلسة
    const session = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        loggedInAt: new Date().toISOString()
    };
    
    // حفظ الجلسة
    if (rememberMe) {
        localStorage.setItem('digitalLibraryCurrentUser', JSON.stringify(session));
    } else {
        sessionStorage.setItem('digitalLibraryCurrentUser', JSON.stringify(session));
    }
    
    // إغلاق النافذة المنبثقة - هذا هو التصحيح الرئيسي
    const loginModal = getElement('#loginn');
    if (loginModal) {
        loginModal.classList.add('hidden');
    }
    
    // إظهار رسالة نجاح
    showAlert('تم تسجيل الدخول بنجاح!', 'success');
    
    // تحديث واجهة المستخدم - مهم!
    updateUIForLoggedInUser(session);
}

// دالة لتسجيل خروج المستخدم
function logoutUser() {
    // إزالة بيانات المستخدم من التخزين
    localStorage.removeItem('digitalLibraryCurrentUser');
    sessionStorage.removeItem('digitalLibraryCurrentUser');
    
    // تحديث واجهة المستخدم
    updateUIForLoggedOutUser();
    
    // إزالة قائمة المستخدم المفتوحة إن وجدت
    const userMenu = getElement('#user-menu');
    if (userMenu) userMenu.remove();
    
    // عرض رسالة نجاح
    showAlert('تم تسجيل الخروج بنجاح', 'success');
}

// دالة لعرض التنبيهات
function showAlert(message, type = 'info') {
    // إنشاء عنصر التنبيه
    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-16 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    alertDiv.textContent = message;
    
    // إضافة إلى جسم المستند
    document.body.appendChild(alertDiv);
    
    // الإزالة بعد 3 ثوانٍ
    setTimeout(() => {
        alertDiv.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 500);
    }, 3000);
}

// التعديل الرئيسي: تحديث واجهة المستخدم للمستخدم المصادق عليه
function updateUIForLoggedInUser(user) {
    console.log('تحديث الواجهة للمستخدم المسجل:', user.fullName);
    
    // تأكد من إخفاء نافذة تسجيل الدخول
    const loginModal = getElement('#loginn');
    if (loginModal) {
        loginModal.classList.add('hidden');
    }
    
    // تحديث أزرار تسجيل الدخول
    const loginLinks = document.querySelectorAll('#showLogin');
    loginLinks.forEach(link => {
        // تغيير النص ليعرض اسم المستخدم
        link.innerHTML = `<i class="fas fa-user ml-2"></i>${user.fullName}`;
        link.classList.add('user-logged-in');
        
        // إزالة مستمع حدث تسجيل الدخول
        link.removeEventListener('click', showLoginModal);
        
        // إضافة مستمع حدث لعرض قائمة المستخدم بدلاً من ذلك
        link.addEventListener('click', showUserMenu);
    });
    
    // تحديث زر إنشاء حساب لعرض "مكتبتي"
    const registerLinks = document.querySelectorAll('a.bg-\\[\\#ff9c00\\]');
    registerLinks.forEach(link => {
        if (link.textContent && (link.textContent.includes('إنشاء حساب') || link.textContent.trim() === 'إنشاء حساب')) {
            link.textContent = 'مكتبتي';
            link.href = 'my-library.html';
            link.removeEventListener('click', showLoginModal);
        }
    });
}

// تحديث واجهة المستخدم للمستخدم غير المصادق عليه
function updateUIForLoggedOutUser() {
    console.log('تحديث الواجهة للمستخدم غير المسجل');
    
    // تحديث أزرار تسجيل الدخول
    const loginLinks = document.querySelectorAll('#showLogin');
    loginLinks.forEach(link => {
        // تغيير النص إلى "تسجيل الدخول"
        link.innerHTML = `<i class="fas fa-user ml-2"></i>تسجيل الدخول`;
        link.classList.remove('user-logged-in');
        
        // إزالة مستمع حدث قائمة المستخدم
        link.removeEventListener('click', showUserMenu);
        
        // إضافة مستمع حدث لعرض نافذة تسجيل الدخول
        link.addEventListener('click', showLoginModal);
    });
    
    // تحديث زر مكتبتي إلى إنشاء حساب
    const myLibraryLinks = document.querySelectorAll('a.bg-\\[\\#ff9c00\\]');
    myLibraryLinks.forEach(link => {
        if (link.textContent && link.textContent.includes('مكتبتي')) {
            link.textContent = 'إنشاء حساب';
            link.removeAttribute('href');
            link.addEventListener('click', showLoginModal);
        }
    });
}

// عرض قائمة المستخدم
function showUserMenu(event) {
    event.preventDefault();
    
    // التحقق مما إذا كانت قائمة المستخدم موجودة بالفعل
    let userMenu = getElement('#user-menu');
    
    if (userMenu) {
        userMenu.remove();
        return;
    }
    
    // تأكد من إخفاء نافذة تسجيل الدخول
    const loginModal = getElement('#loginn');
    if (loginModal) {
        loginModal.classList.add('hidden');
    }
    
    // الحصول على معلومات المستخدم
    const currentUserLocal = localStorage.getItem('digitalLibraryCurrentUser');
    const currentUserSession = sessionStorage.getItem('digitalLibraryCurrentUser');
    const user = JSON.parse(currentUserLocal || currentUserSession);
    
    if (!user) {
        console.error('لا يوجد مستخدم مسجل الدخول');
        return;
    }
    
    // إنشاء القائمة - وضعها على اليسار
    userMenu = document.createElement('div');
    userMenu.id = 'user-menu';
    userMenu.className = 'absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50';
    userMenu.style.top = '60px';
    userMenu.style.left = '20px'; // تثبيت القائمة على اليسار
    
    userMenu.innerHTML = `
        <div class="py-1" role="menu" aria-orientation="vertical">
            <div class="px-4 py-2 text-sm text-gray-700 border-b">
                <p class="font-medium">${user.fullName}</p>
                <p class="text-gray-500 text-xs">${user.email}</p>
            </div>
            <a href="#" id="show-profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <i class="fas fa-user-circle ml-2"></i>الملف الشخصي
            </a>
            <a href="my-library.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <i class="fas fa-book ml-2"></i>مكتبتي
            </a>
            <button id="logout-button" class="w-full text-right block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <i class="fas fa-sign-out-alt ml-2"></i>تسجيل الخروج
            </button>
        </div>
    `;
    
    // إضافة القائمة إلى الجسم
    document.body.appendChild(userMenu);
    
    // إضافة حدث تسجيل الخروج
    const logoutButton = getElement('#logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logoutUser);
    }
    
    // إضافة حدث عرض الملف الشخصي
    const showProfileButton = getElement('#show-profile');
    if (showProfileButton) {
        showProfileButton.addEventListener('click', function(e) {
            e.preventDefault();
            showProfileModal(user);
            userMenu.remove(); // إغلاق القائمة عند فتح الملف الشخصي
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function closeMenu(e) {
        if (userMenu && !userMenu.contains(e.target) && e.target !== event.target) {
            userMenu.remove();
            document.removeEventListener('click', closeMenu);
        }
    });
}

// دالة لعرض نافذة الملف الشخصي
function showProfileModal(user) {
    // التحقق مما إذا كانت نافذة الملف الشخصي موجودة بالفعل
    let profileModal = getElement('#profile-modal');
    if (profileModal) profileModal.remove();
    
    // إنشاء نافذة الملف الشخصي
    profileModal = document.createElement('div');
    profileModal.id = 'profile-modal';
    profileModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    
    profileModal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 fade-in">
            <div class="p-4 flex justify-end">
                <button id="close-profile" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="flex flex-col items-center p-6">
                <div class="w-24 h-24 rounded-full bg-[#ff9c00] flex items-center justify-center text-white text-4xl mb-4">
                    <i class="fas fa-user"></i>
                </div>
                <h2 class="text-2xl font-bold text-center mb-2">${user.fullName}</h2>
                <p class="text-gray-500 mb-6">${user.email}</p>
                
                <div class="w-full space-y-4">
                    <div class="border-t border-gray-200 pt-4">
                        <h3 class="font-medium mb-2">معلومات المستخدم</h3>
                        <p class="text-gray-600">تاريخ التسجيل: ${new Date(user.loggedInAt).toLocaleDateString('ar-SA')}</p>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-4">
                        <button id="edit-profile" class="w-full bg-[#ff9c00] hover:bg-[#e68b00] text-white font-medium py-2 rounded-lg transition-colors duration-200">
                            تعديل الملف الشخصي
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // إضافة النافذة إلى الجسم
    document.body.appendChild(profileModal);
    
    // إضافة حدث إغلاق النافذة
    const closeProfileButton = getElement('#close-profile');
    if (closeProfileButton) {
        closeProfileButton.addEventListener('click', function() {
            profileModal.remove();
        });
    }
    
    // إضافة حدث زر تعديل الملف الشخصي
    const editProfileButton = getElement('#edit-profile');
    if (editProfileButton) {
        editProfileButton.addEventListener('click', function() {
            // هنا يمكنك إضافة منطق لتعديل الملف الشخصي
            showAlert('سيتم تنفيذ هذه الميزة قريباً', 'info');
        });
    }
    
    // إغلاق النافذة عند النقر خارجها
    profileModal.addEventListener('click', function(e) {
        if (e.target === profileModal) {
            profileModal.remove();
        }
    });
}

// دالة لعرض نافذة تسجيل الدخول
function showLoginModal() {
    // التحقق مما إذا كان هناك مستخدم مسجل الدخول
    const currentUser = checkAuthStatus();
    if (currentUser) {
        // إذا كان هناك مستخدم مسجل الدخول، عرض قائمة المستخدم بدلاً من نافذة تسجيل الدخول
        showUserMenu(event);
        return;
    }
    
    // عرض نافذة تسجيل الدخول فقط إذا لم يكن هناك مستخدم مسجل الدخول
    const loginModal = getElement('#loginn');
    if (loginModal) loginModal.classList.remove('hidden');
}

// دالة للتحقق إذا كان المستخدم مسجل الدخول وإعادة توجيهه
function checkAuthStatus() {
    const currentUserLocal = localStorage.getItem('digitalLibraryCurrentUser');
    const currentUserSession = sessionStorage.getItem('digitalLibraryCurrentUser');
    
    // إذا كان المستخدم غير مسجل الدخول وكانت الصفحة الحالية تتطلب تسجيل الدخول
    if ((!currentUserLocal && !currentUserSession) && window.location.pathname.includes('my-library.html')) {
        // إعادة توجيه إلى الصفحة الرئيسية
        window.location.href = 'digital-library-homepage.html';
        return false;
    }
    
    // إذا كان المستخدم مسجل الدخول
    if (currentUserLocal || currentUserSession) {
        return JSON.parse(currentUserLocal || currentUserSession);
    }
    
    return false;
}

// تهيئة التطبيق - المُعدَّلة
function initAuth() {
    console.log('تم تهيئة وحدة المصادقة');
    
    // التحقق من حالة تسجيل الدخول
    const currentUser = checkAuthStatus();
    
    // تحديث واجهة المستخدم بناءً على حالة تسجيل الدخول
    if (currentUser) {
        console.log('مستخدم مسجل الدخول:', currentUser.fullName);
        updateUIForLoggedInUser(currentUser);
    } else {
        console.log('لا يوجد مستخدم مسجل الدخول');
        updateUIForLoggedOutUser();
    }
    
    // إضافة مستمعات الأحداث لنوافذ تسجيل الدخول والتسجيل
    setupModalEventListeners();
    
    // إعداد مستمعات الأحداث لنماذج تسجيل الدخول والتسجيل
    setupFormEventListeners();
}

// دالة جديدة لإعداد مستمعات الأحداث للنوافذ المنبثقة
function setupModalEventListeners() {
    // زر إغلاق نافذة تسجيل الدخول
    const closeLoginBtn = getElement('#close_login');
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', function() {
            const loginModal = getElement('#loginn');
            if (loginModal) loginModal.classList.add('hidden');
        });
    }
    
    // التبديل بين علامات تبويب تسجيل الدخول والتسجيل
    const loginTab = getElement('#login-tab');
    const registerTab = getElement('#register-tab');
    const loginForm = getElement('#login-form');
    const registerForm = getElement('#register-form');
    
    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', function() {
            this.classList.add('border-[#ff9c00]', 'text-[#ff9c00]');
            this.classList.remove('border-gray-200', 'text-gray-500');
            registerTab.classList.remove('border-[#ff9c00]', 'text-[#ff9c00]');
            registerTab.classList.add('border-gray-200', 'text-gray-500');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });
        
        registerTab.addEventListener('click', function() {
            this.classList.add('border-[#ff9c00]', 'text-[#ff9c00]');
            this.classList.remove('border-gray-200', 'text-gray-500');
            loginTab.classList.remove('border-[#ff9c00]', 'text-[#ff9c00]');
            loginTab.classList.add('border-gray-200', 'text-gray-500');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }
}

// دالة جديدة لإعداد مستمعات الأحداث لنماذج تسجيل الدخول والتسجيل
function setupFormEventListeners() {
    const loginForm = getElement('#login-form');
    const registerForm = getElement('#register-form');
    
    if (loginForm) {
        const loginButton = loginForm.querySelector('button');
        if (loginButton) {
            loginButton.addEventListener('click', loginUser);
        }
    }
    
    if (registerForm) {
        const registerButton = registerForm.querySelector('button');
        if (registerButton) {
            registerButton.addEventListener('click', registerUser);
        }
    }
    
    // إضافة مستمعات الأحداث لأزرار تسجيل الدخول وإنشاء الحساب
    addLoginButtonEventListeners();
}

// دالة جديدة لإضافة مستمعات الأحداث لأزرار تسجيل الدخول وإنشاء الحساب
function addLoginButtonEventListeners() {
    // التحقق من حالة تسجيل الدخول
    const currentUser = checkAuthStatus();
    
    // الحصول على جميع أزرار تسجيل الدخول وإنشاء الحساب
    const loginButtons = document.querySelectorAll('#showLogin');
    const registerButtons = document.querySelectorAll('a.bg-\\[\\#ff9c00\\]');
    
    if (currentUser) {
        // إذا كان المستخدم مسجل الدخول
        loginButtons.forEach(button => {
            button.removeEventListener('click', showLoginModal);
            button.addEventListener('click', showUserMenu);
        });
    } else {
        // إذا كان المستخدم غير مسجل الدخول
        loginButtons.forEach(button => {
            button.removeEventListener('click', showUserMenu);
            button.addEventListener('click', showLoginModal);
        });
        
        registerButtons.forEach(button => {
            if (button.textContent && button.textContent.includes('إنشاء حساب')) {
                button.addEventListener('click', showLoginModal);
            }
        });
    }
}

// البدء عند تحميل الـ DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل DOM بالكامل');
    initAuth();
});

// في حالة حدوث DOMContentLoaded بالفعل
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('كان DOM محملاً بالفعل، جاري تهيئة المصادقة');
    setTimeout(initAuth, 100);
}