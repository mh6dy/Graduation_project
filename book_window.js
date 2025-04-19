
    // بيانات الكتب
    const booksData = {
        'book11': {
            title: 'البرمجة بلغة ++C',
            author: 'د.ياسر صادق ميطع',
            rating: 4.5,
            image: 'img_book/book11.jpg',
            description: 'يعد هذا الكتاب مرجعاً شاملاً للطلاب والمهتمين بتعلم لغة البرمجة ++C، حيث يتناول الكتاب الأساسيات والمفاهيم المتقدمة في اللغة بأسلوب سلس ومُبسط. يحتوي الكتاب على أمثلة عملية وتطبيقات واقعية تساعد القارئ على فهم المفاهيم البرمجية وتطبيقها في مشاريع حقيقية.',
            ur:'book_url/book11.pdf'
        },
        'book22': {
            title: 'Opject-Oriented Programming in C++',
            author: 'Nicolai M. Josuttis',
            rating: 4.8,
            image: 'img_book/book22.jpg',
            description: 'يعتبر هذا الكتاب من أفضل المراجع العالمية في تعلم البرمجة كائنية التوجه باستخدام لغة ++C. يقدم المؤلف شرحاً تفصيلياً للمفاهيم الأساسية مثل الفئات والكائنات والوراثة وتعدد الأشكال والتغليف. الكتاب غني بالأمثلة التطبيقية التي تساعد المبرمجين على تطوير مهاراتهم في تصميم البرامج بأسلوب كائني التوجه.',
            ur:'book_url/book22.pdf'
        },
        'book33': {
            title: 'C++ من البداية إلى البرمجة الكيانية',
            author: 'نضال خضير',
            rating: 4.3,
            image: 'img_book/book33.webp',
            description: 'يتميز هذا الكتاب بأسلوبه السلس في تقديم لغة ++C باللغة العربية، حيث ينطلق بالقارئ من الصفر وحتى إتقان مفاهيم البرمجة كائنية التوجه. يحتوي الكتاب على تمارين وأمثلة عملية مشروحة خطوة بخطوة، مما يجعله مناسباً للمبتدئين والطلاب الذين يرغبون في تعلم اللغة بطريقة منهجية وسهلة.',
            ur:'book_url/book11.pdf'
        },
        'book44': {
            title: 'Machine Learning for Beginners',
            author: 'Chris Sebastian',
            rating: 4.2,
            image: 'img_book/book44.webp',
            description: 'يقدم هذا الكتاب مدخلاً سلساً لعالم تعلم الآلة، حيث يشرح المفاهيم الأساسية والخوارزميات الرئيسية بأسلوب مبسط يناسب المبتدئين. يتناول الكتاب مواضيع مثل الانحدار والتصنيف والتجميع والشبكات العصبية، مع أمثلة عملية تطبيقية باستخدام لغة بايثون والمكتبات الشائعة مثل Scikit-learn وTensorFlow.',
            ur:'book_url/book44.pdf'
        },
        'book55': {
            title: 'علوم الحاسوب من الألف إلى الياء',
            author: 'Ian Wienand',
            rating: 4.6,
            image: 'img_book/book55.png',
            description: 'يعد هذا الكتاب موسوعة شاملة في علوم الحاسوب، حيث يغطي مجموعة واسعة من المواضيع بدءاً من أساسيات الحوسبة والبرمجة وصولاً إلى المفاهيم المتقدمة مثل الذكاء الاصطناعي وأمن المعلومات والحوسبة السحابية. يتميز الكتاب بتقديم المعلومات بشكل منظم ومبسط، مما يجعله مرجعاً قيماً للطلاب والمهتمين بمجال علوم الحاسوب.',
            ur:'book_url/book55.pdf'
        },
        'book66': {
            title: 'أساسيات النظم الرقمية',
            author: 'خالد بكرو',
            rating: 4.4,
            image: 'img_book/book66.jpg',
            description: 'يتناول هذا الكتاب المفاهيم الأساسية في النظم الرقمية والإلكترونيات، حيث يشرح نظم العد المختلفة والبوابات المنطقية والدوائر التجميعية والتتابعية. يحتوي الكتاب على العديد من الأمثلة والتمارين التطبيقية التي تساعد على فهم المادة العلمية وترسيخها. مناسب للطلاب والمهندسين المهتمين بتصميم وتحليل الدوائر الرقمية.',
            ur:'book_url/book66.pdf'
        },
        'book77': {
            title: 'اكتشاف وتصحيح أخطاء تطبيقات #C',
            author: 'مجتمع المبرمجين العرب',
            rating: 4.1,
            image: 'img_book/book77.png',
            description: 'يقدم هذا الكتاب دليلاً عملياً لاكتشاف وتصحيح الأخطاء البرمجية في تطبيقات #C، حيث يتناول الأدوات والتقنيات المستخدمة في تتبع الأخطاء وإصلاحها. يحتوي الكتاب على أمثلة واقعية لمشاكل شائعة وكيفية حلها، بالإضافة إلى نصائح وإرشادات لكتابة شفرة برمجية خالية من الأخطاء وقابلة للصيانة.',
            ur:'book_url/book77.pdf'
        },
        'book88': {
            title: 'أخلاقيات الذكاء الاصطناعي',
            author: 'مارك كوكلبير',
            rating: 4.7,
            image: 'img_book/book88.jpg',
            description: 'يتناول هذا الكتاب القضايا الأخلاقية والاجتماعية المرتبطة بتطوير واستخدام تقنيات الذكاء الاصطناعي، حيث يناقش موضوعات مثل الخصوصية والتحيز والمساءلة والآثار الاقتصادية. يقدم الكتاب رؤى متعمقة حول كيفية تصميم وتطوير أنظمة ذكاء اصطناعي تراعي القيم الإنسانية وتعزز المصلحة العامة.',
            ur:'book_url/book88.pdf'
        },
        'book99': {
            title: 'Machine Learning Yearning',
            author: 'Andrew Ng',
            rating: 4.9,
            image: 'img_book/book99.jpg',
            description: 'يعد هذا الكتاب دليلاً عملياً لبناء وتطوير أنظمة تعلم الآلة، حيث يقدم أندرو نج خبرته العميقة في هذا المجال. يركز الكتاب على الجوانب العملية والاستراتيجيات الفعالة لتحسين أداء نماذج التعلم الآلي، مثل تقسيم البيانات وتحليل الأخطاء وتحديد اتجاه التطوير. يعتبر مرجعاً أساسياً للمهندسين والباحثين في مجال الذكاء الاصطناعي وتعلم الآلة.',
            ur:'book_url/book99.pdf'
        },
        'book10': {
            title: 'Artificial Intelligence',
            author: 'David Brown',
            rating: 4.3,
            image: 'img_book/book10.jpg',
            description: 'يقدم هذا الكتاب مقدمة شاملة لمجال الذكاء الاصطناعي، حيث يتناول المفاهيم الأساسية والتقنيات المستخدمة في بناء الأنظمة الذكية. يغطي الكتاب مواضيع متنوعة مثل البحث والاستدلال والتعلم وتمثيل المعرفة والرؤية الحاسوبية ومعالجة اللغات الطبيعية. يتميز بأسلوبه المبسط وأمثلته العملية التي تساعد على فهم المفاهيم المعقدة في هذا المجال.',
            ur:'book_url/book10.pdf'
        },
        'book111': {
            title: 'Machine Learning',
            author: 'Jason Callaway',
            rating: 4.5,
            image: 'img_book/book111.jpg',
            description: 'يعد هذا الكتاب مرجعاً متكاملاً في تعلم الآلة، حيث يشرح الأسس النظرية والتطبيقات العملية لمختلف خوارزميات التعلم الآلي. يتناول الكتاب التعلم الخاضع للإشراف وغير الخاضع للإشراف والتعلم المعزز، مع تقديم أمثلة تطبيقية باستخدام لغات برمجة مثل بايثون وR. يناسب الكتاب الطلاب والباحثين والمهندسين الراغبين في تعميق معرفتهم بهذا المجال.',
            ur:'book_url/book111.pdf'
        },
        'book122': {
            title: 'Artificial Intelligence',
            author: 'Chris Neil',
            rating: 4.4,
            image: 'img_book/book122.jpg',
            description: 'يستكشف هذا الكتاب الآفاق المستقبلية للذكاء الاصطناعي وتأثيره على مختلف جوانب الحياة البشرية، حيث يناقش التطورات التقنية الحديثة والتحديات المستقبلية. يتناول الكتاب مواضيع مثل التعلم العميق والروبوتات الذكية والأنظمة المستقلة، مع تقديم رؤى حول كيفية تسخير قوة الذكاء الاصطناعي لخدمة البشرية وحل المشكلات العالمية.',
            ur:'book_url/book122.pdf'
        }
    };

    // دالة لعرض معلومات الكتاب
    function showBookInfo(bookId) {
        const book = booksData[bookId];
        if (!book) return;
        
        const bookInfoHTML = `
            <div class="book-image-container overflow-hidden">
                <img src="${book.image}" alt="${book.title}" class="shadow-lg rounded-lg">
            </div>
            <div class="book-details-container">
                <h2 class="text-2xl max-w-sm font-bold text-gray-800">${book.title}</h2>
                <h3 class="text-xl text-gray-600 mt-2">${book.author}</h3>
                <div class="book-rating">
                    ${getRatingStars(book.rating)}
                    <span class="text-gray-600 text-lg mr-2">${book.rating}/5</span>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">نبذة عن الكتاب:</h4>
                    <p class="max-w-sm text-gray-700 text-right leading-relaxed">${book.description}</p>
                </div>
                <a href="${book.ur} " target="_blank">
                    <div class="flex justify-center">
                    <button class="w-1/2 download-btn">
                    قراءة وتحميل الكتاب
                    </button>
                </div> 
                </a>
                   
            </div>
        `;
        
        document.getElementById('bookInfo').innerHTML = bookInfoHTML;
        document.getElementById('bookModalOverlay').style.display = 'flex';
        
        // منع التمرير في الخلفية عند فتح النافذة المنبثقة
        document.body.style.overflow = 'hidden';
    }
    
    // دالة لإنشاء نجوم التقييم
    function getRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // دالة لإغلاق النافذة المنبثقة
    function closeBookModal() {
        document.getElementById('bookModalOverlay').style.display = 'none';
        
        // إعادة التمرير العمودي فقط عند إغلاق النافذة المنبثقة
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
    }
    
    
    // دالة لتمرير الكتب في الرف
    function scrollBooks(arrow, scrollAmount) {
        const booksSlider = arrow.parentElement.querySelector('.books-slider');
        booksSlider.scrollLeft -= scrollAmount;
    }

    // إغلاق النافذة المنبثقة عند النقر خارجها
    document.getElementById('bookModalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBookModal();
        }
    });
