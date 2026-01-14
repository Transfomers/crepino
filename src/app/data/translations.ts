export type Language = 'fr' | 'en' | 'ar';

export interface Translation {
    [key: string]: {
        [key in Language]: string;
    };
}

export const translations: Translation = {
    'nav.home': { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
    'nav.about': { fr: 'À Propos', en: 'About Us', ar: 'من نحن' },
    'nav.menu': { fr: 'Menu', en: 'Menu', ar: 'القائمة' },
    'nav.shop': { fr: 'Boutique', en: 'Shop', ar: 'المتجر' },
    'nav.gallery': { fr: 'Galerie', en: 'Gallery', ar: 'المعرض' },
    'nav.contact': { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
    'nav.call': { fr: 'Appeler', en: 'Call Us', ar: 'اتصل بنا' },

    'hero.welcome': {
        fr: 'Bienvenue chez Crepino',
        en: 'Welcome to Crepino',
        ar: 'مرحبا بكم في كريبينو'
    },
    'hero.slogan': {
        fr: 'La Station du Bonheur',
        en: 'The Station of Happiness',
        ar: 'محطة السعادة'
    },
    'hero.tagline': {
        fr: 'La Station du Bonheur',
        en: 'The Station Of Happiness',
        ar: 'محطة السعادة'
    },
    'hero.description': {
        fr: 'Crêpes Artisanales • Gaufres Belges • Café Premium • Desserts',
        en: 'Artisanal Crepes • Belgian Waffles • Premium Coffee • Desserts',
        ar: 'كريب حرفي • وافل بلجيكي • قهوة فاخرة • حلويات'
    },
    'hero.descriptionHero': {
        fr: 'Savourez nos crêpes signature et notre café artisanal au cœur de Yaoundé. Une expérience gourmande unique à chaque bouchée.',
        en: 'Savor our signature crepes and artisanal coffee in the heart of Yaoundé. A unique gourmet experience in every bite.',
        ar: 'تذوق الكريب المميز والقهوة اليدوية في قلب ياوندي. تجربة طعام فريدة في كل لقمة.'
    },
    'hero.location': {
        fr: '📍 PLAYCE Yaoundé, Cameroun',
        en: '📍 PLAYCE Yaoundé, Cameroon',
        ar: '📍 بليس ياوندي، الكاميرون'
    },
    'hero.orderNow': {
        fr: 'Commander Maintenant',
        en: 'Order Now',
        ar: 'اطلب الآن'
    },
    'hero.discoverMenu': {
        fr: 'Découvrir le Menu',
        en: 'Discover Menu',
        ar: 'اكتشف القائمة'
    },

    'features.freshDaily': {
        fr: 'Frais Chaque Jour',
        en: 'Fresh Every Day',
        ar: 'طازج يومياً'
    },
    'features.freshDailyDesc': {
        fr: 'Ingrédients de première qualité préparés chaque matin pour un goût exceptionnel.',
        en: 'Premium quality ingredients prepared every morning for exceptional taste.',
        ar: 'مكونات عالية الجودة تحضر كل صباح لمذاق استثنائي.'
    },
    'features.artisanCoffee': {
        fr: 'Café Artisanal',
        en: 'Artisan Coffee',
        ar: 'قهوة حرفية'
    },
    'features.artisanCoffeeDesc': {
        fr: 'Grains sélectionnés torréfiés à la perfection par nos baristas passionnés.',
        en: 'Selected beans roasted to perfection by our passionate baristas.',
        ar: 'حبوب مختارة محمصة بإتقان من قبل الباريستا الشغوفين لدينا.'
    },
    'features.instagramWorthy': {
        fr: 'Instagrammable',
        en: 'Instagram Worthy',
        ar: 'يستحق النشر'
    },
    'features.instagramWorthyDesc': {
        fr: 'Des présentations magnifiques parfaites pour vos publications sur les réseaux sociaux.',
        en: 'Beautiful presentations perfect for your social media feed.',
        ar: 'عروض جميلة مثالية لمنشوراتك على وسائل التواصل.'
    },
    'features.instagramDesc': {
        fr: 'Des moments captivants et des décors élégants pour vos plus belles photos.',
        en: 'Captivating moments and elegant decor for your most beautiful photos.',
        ar: 'لحظات ساحرة وديكور أنيق لأجمل صورك.'
    },

    'about.discover': {
        fr: 'Découvrir',
        en: 'Discover',
        ar: 'اكتشف'
    },
    'about.ourStory': {
        fr: 'Notre Histoire',
        en: 'Our Story',
        ar: 'قصتنا'
    },
    'about.paragraph1': {
        fr: 'Niché au cœur de PLAYCE Yaoundé, Crepino est plus qu\'un simple café – c\'est votre station de bonheur. Nous croyons que chaque repas doit être une expérience, chaque café un moment de joie.',
        en: 'Nestled in the heart of PLAYCE Yaoundé, Crepino is more than just a coffee shop – it\'s your station of happiness. We believe every meal should be an experience, every coffee a moment of joy.',
        ar: 'يقع كريبينو في قلب بليس ياوندي، وهو أكثر من مجرد مقهى - إنه محطة سعادتك. نحن نؤمن بأن كل وجبة يجب أن تكون تجربة، وكل قهوة لحظة فرح.'
    },
    'about.paragraph2': {
        fr: 'Notre passion est de créer la crêpe parfaite, sucrée ou salée, accompagnée d\'un café savamment infusé. Des gaufres belges aux desserts vibrants, tout est conçu pour vous faire sourire.',
        en: 'Our passion lies in crafting the perfect crepe, whether sweet or savory, paired with expertly brewed coffee. From Belgian waffles to vibrant desserts, everything is designed to bring a smile to your face.',
        ar: 'شغفنا يكمن في ابتكار الكريب المثالي، سواء كان حلواً أو مالحاً، مقترناً بقهوة محضرة ببراعة. من الوافل البلجيكي إلى الحلويات المبهجة، كل شيء مصمم ليرسم البسمة على وجهك.'
    },
    'about.exploreMenu': {
        fr: 'Explorer le Menu',
        en: 'Explore Menu',
        ar: 'استكشف القائمة'
    },
    'about.visitUs': {
        fr: 'Nous Visiter',
        en: 'Visit Us',
        ar: 'قم بزيارتنا'
    },

    'menu.onlineMenu': {
        fr: 'Menu en Ligne',
        en: 'Online Menu',
        ar: 'القائمة الإلكترونية'
    },
    'menu.selectTaste': {
        fr: 'Sélectionnez Votre Goût',
        en: 'Select Your Taste',
        ar: 'اختر ذوقك'
    },
    'menu.subtitle': {
        fr: 'Fait main avec amour, servi avec passion. Chaque plat raconte une histoire.',
        en: 'Handcrafted with love, served with passion. Every dish tells a story.',
        ar: 'مصنوع يدوياً بحب، يُقدم بشغف. كل طبق يروي قصة.'
    },
    'menu.noProducts': {
        fr: 'Aucun produit dans cette catégorie',
        en: 'No products in this category',
        ar: 'لا توجد منتجات في هذه الفئة'
    },

    'cat.tous': { fr: 'Tous', en: 'All', ar: 'الكل' },
    'cat.crepesSucrees': { fr: 'Crêpes Sucrées', en: 'Sweet Crepes', ar: 'كريب حلو' },
    'cat.crepesSalees': { fr: 'Crêpes Salées', en: 'Savory Crepes', ar: 'كريب مالح' },
    'cat.gaufres': { fr: 'Gaufres', en: 'Waffles', ar: 'وافل' },
    'cat.milkshakes': { fr: 'Milkshakes', en: 'Milkshakes', ar: 'ميلك شيك' },
    'cat.boissonsChaudes': { fr: 'Boissons Chaudes', en: 'Hot Drinks', ar: 'مشروبات ساخنة' },
    'cat.boissonsFroides': { fr: 'Boissons Froides', en: 'Cold Drinks', ar: 'مشروبات باردة' },

    'gallery.followJourney': {
        fr: 'Suivez Notre Voyage',
        en: 'Follow Our Journey',
        ar: 'تابع رحلتنا'
    },
    'gallery.instagramGallery': {
        fr: 'Galerie Instagram',
        en: 'Instagram Gallery',
        ar: 'معرض إنستغرام'
    },
    'gallery.tagUs': {
        fr: 'Taguez-nous @crepino.coffeeshop et partagez votre bonheur !',
        en: 'Tag us @crepino.coffeeshop and share your happiness!',
        ar: 'منشن لنا @crepino.coffeeshop وشاركنا سعادتك!'
    },
    'gallery.followInstagram': {
        fr: '📸 Suivez-nous sur Instagram',
        en: '📸 Follow Us on Instagram',
        ar: '📸 تابعنا على إنستغرام'
    },

    'contact.comeVisit': {
        fr: 'Venez Nous Voir',
        en: 'Come Visit Us',
        ar: 'تفضل بزيارتنا'
    },
    'contact.findHappiness': {
        fr: 'Trouvez Votre Bonheur',
        en: 'Find Your Happiness',
        ar: 'ابحث عن سعادتك'
    },
    'contact.location': {
        fr: 'Emplacement',
        en: 'Location',
        ar: 'الموقع'
    },
    'contact.phone': {
        fr: 'Téléphone',
        en: 'Phone',
        ar: 'الهاتف'
    },
    'contact.hours': {
        fr: 'Horaires',
        en: 'Hours',
        ar: 'ساعات العمل'
    },
    'contact.hoursValue': {
        fr: 'Lundi - Dimanche : 08h00 - 22h00',
        en: 'Monday - Sunday: 8:00 AM - 10:00 PM',
        ar: 'الاثنين - الأحد: 8:00 صباحاً - 10:00 مساءً'
    },
    'contact.socialMedia': {
        fr: 'Réseaux Sociaux',
        en: 'Social Media',
        ar: 'وسائل التواصل الاجتماعي'
    },
    'contact.sendMessage': {
        fr: 'Envoyez-nous un Message',
        en: 'Send Us a Message',
        ar: 'أرسل لنا رسالة'
    },
    'contact.yourName': {
        fr: 'Votre Nom',
        en: 'Your Name',
        ar: 'اسمك'
    },
    'contact.yourEmail': {
        fr: 'Votre Email',
        en: 'Your Email',
        ar: 'بريدك الإلكتروني'
    },
    'contact.yourPhone': {
        fr: 'Votre Téléphone',
        en: 'Your Phone',
        ar: 'رقم هاتفك'
    },
    'contact.yourMessage': {
        fr: 'Votre Message',
        en: 'Your Message',
        ar: 'رسالتك'
    },
    'contact.send': {
        fr: 'Envoyer le Message ✉️',
        en: 'Send Message ✉️',
        ar: 'إرسال الرسالة ✉️'
    },

    'footer.rateService': {
        fr: '⭐ Noter notre service',
        en: '⭐ Rate our service',
        ar: '⭐ قيم خدمتنا'
    },
    'footer.copyright': {
        fr: '© 2024 Crepino Coffee Shop. Tous droits réservés.',
        en: '© 2024 Crepino Coffee Shop. All rights reserved.',
        ar: '© 2024 مقهى كريبينو. جميع الحقوق محفوظة.'
    },

    'shop.onlineShop': {
        fr: 'Boutique en Ligne',
        en: 'Online Shop',
        ar: 'المتجر الإلكتروني'
    },
    'shop.subtitle': {
        fr: 'Commandez vos crêpes, gaufres et boissons préférées. Livraison rapide à Yaoundé!',
        en: 'Order your favorite crepes, waffles and drinks. Fast delivery in Yaoundé!',
        ar: 'اطلب الكريب والوافل والمشروبات المفضلة لديك. توصيل سريع في ياوندي!'
    },
    'shop.productsAvailable': {
        fr: 'produits disponibles',
        en: 'products available',
        ar: 'منتجات متوفرة'
    },
    'shop.noProductsFound': {
        fr: 'Aucun produit trouvé',
        en: 'No products found',
        ar: 'لم يتم العثور على منتجات'
    },
    'shop.tryAnother': {
        fr: 'Essayez une autre catégorie',
        en: 'Try another category',
        ar: 'جرب فئة أخرى'
    },
    'shop.needHelp': {
        fr: 'Besoin d\'aide pour commander?',
        en: 'Need help ordering?',
        ar: 'هل تحتاج مساعدة في الطلب؟'
    },
    'shop.callOrVisit': {
        fr: 'Appelez-nous directement ou visitez notre café à PLAYCE Yaoundé',
        en: 'Call us directly or visit our cafe at PLAYCE Yaoundé',
        ar: 'اتصل بنا مباشرة أو زر مقهانا في بليس ياوندي'
    },
    'shop.backHome': {
        fr: '🏠 Retour à l\'accueil',
        en: '🏠 Back to Home',
        ar: '🏠 العودة للرئيسية'
    },

    'cart.title': {
        fr: 'Votre Panier',
        en: 'Your Cart',
        ar: 'سلة التسوق'
    },
    'cart.empty': {
        fr: 'Votre panier est vide',
        en: 'Your cart is empty',
        ar: 'سلة التسوق فارغة'
    },
    'cart.addProducts': {
        fr: 'Ajoutez des produits pour commencer',
        en: 'Add products to get started',
        ar: 'أضف منتجات للبدء'
    },
    'cart.subtotal': {
        fr: 'Sous-total',
        en: 'Subtotal',
        ar: 'المجموع الفرعي'
    },
    'cart.checkout': {
        fr: 'Commander sur WhatsApp',
        en: 'Checkout on WhatsApp',
        ar: 'الدفع عبر واتساب'
    },

    'product.added': {
        fr: 'Produit ajouté au panier',
        en: 'Product added to cart',
        ar: 'تمت إضافة المنتج للسلة'
    },
    'product.unavailable': {
        fr: 'Non disponible',
        en: 'Not available',
        ar: 'غير متوفر'
    },
    'product.popular': {
        fr: 'Populaire 🔥',
        en: 'Popular 🔥',
        ar: 'مشهور 🔥'
    },
    'product.add': {
        fr: 'Ajouter',
        en: 'Add to Cart',
        ar: 'أضف للسلة'
    },

    'booking.title': {
        fr: '🎉 Réserver un Événement',
        en: '🎉 Book an Event',
        ar: '🎉 حجز فعالية'
    },
    'booking.success': {
        fr: 'Demande de réservation envoyée !',
        en: 'Booking request sent!',
        ar: 'تم إرسال طلب الحجز!'
    },
    'complaints.title': {
        fr: '⭐ Noter notre service',
        en: '⭐ Rate our service',
        ar: '⭐ قيم خدمتنا'
    },
    'complaints.success': {
        fr: 'Message envoyé !',
        en: 'Message sent!',
        ar: 'تم إرسال الرسالة!'
    },
    'complaints.successMessage': {
        fr: 'Nous vous répondrons dans les plus brefs délais.',
        en: 'We will respond to you as soon as possible.',
        ar: 'سنرد عليك في أقرب وقت ممكن.'
    },

    'language.select': {
        fr: 'Langue',
        en: 'Language',
        ar: 'اللغة'
    },

    // Complaints specific
    'complaints.type': { fr: 'Type de réclamation *', en: 'Complaint type *', ar: 'نوع الشكوى *' },
    'complaints.service': { fr: 'Service Client 👤', en: 'Customer Service 👤', ar: 'خدمة العملاء 👤' },
    'complaints.quality': { fr: 'Qualité du Produit 🍽️', en: 'Product Quality 🍽️', ar: 'جودة المنتج 🍽️' },
    'complaints.hygiene': { fr: 'Hygiène 🧹', en: 'Hygiene 🧹', ar: 'النظافة 🧹' },
    'complaints.staff': { fr: 'Personnel 👥', en: 'Staff 👥', ar: 'الموظفون 👥' },
    'complaints.other': { fr: 'Autre ❓', en: 'Other ❓', ar: 'آخر ❓' },
    'complaints.subtitle': { fr: 'Votre avis compte pour nous améliorer', en: 'Your feedback matters for our improvement', ar: 'رأيك يهمنا لنتمكن من التحسن' },
    'complaints.selectType': { fr: 'Sélectionnez un type...', en: 'Select a type...', ar: 'اختر نوعاً...' },
    'complaints.tableNum': { fr: 'Numéro de table', en: 'Table number', ar: 'رقم الطاولة' },
    'complaints.tablePlaceholder': { fr: 'Ex: 5', en: 'Ex: 5', ar: 'مثال: 5' },
    'complaints.incidentDate': { fr: 'Date de l\'incident *', en: 'Incident date *', ar: 'تاريخ الحادثة *' },
    'complaints.descPlaceholder': { fr: 'Votre avis compte pour nous améliorer...', en: 'Your feedback matters for our improvement...', ar: 'رأيك يهمنا لنتمكن من التحسن...' },
    'complaints.namePlaceholder': { fr: 'nom', en: 'name', ar: 'الاسم' },
    'complaints.emailPlaceholder': { fr: 'votre@email.com', en: 'your@email.com', ar: 'your@email.com' },
    'complaints.phonePlaceholder': { fr: 'Entrez votre numéro', en: 'Enter your number', ar: 'أدخل رقمك' },
    'complaints.submitting': { fr: 'Envoi en cours...', en: 'Sending...', ar: 'جاري الإرسال...' },
    'complaints.submit': { fr: 'Envoyer', en: 'Submit', ar: 'إرسال' },
    'complaints.helpText': { fr: 'Un email sera ouvert avec les détails de votre avis pour nous améliorer', en: 'An email will be opened with your feedback details for our improvement', ar: 'سيتم فتح بريد إلكتروني يحتوي على تفاصيل ملاحظاتك لتحسين خدماتنا' },

    // Booking specific
    'booking.anniversary': { fr: 'Anniversaire 🎂', en: 'Anniversary 🎂', ar: 'ذكرى سنوية 🎂' },
    'booking.graduation': { fr: 'Graduation 🎓', en: 'Graduation 🎓', ar: 'تخرج 🎓' },
    'booking.birthday': { fr: 'Fête d\'anniversaire 🎉', en: 'Birthday Party 🎉', ar: 'حفلة عيد ميلاد 🎉' },
    'booking.corporate': { fr: 'Événement d\'entreprise 💼', en: 'Corporate Event 💼', ar: 'فعالية مؤسسية 💼' },
    'booking.wedding': { fr: 'Mariage 💒', en: 'Wedding 💒', ar: 'زفاف 💒' },
    'booking.baby_shower': { fr: 'Baby Shower 👶', en: 'Baby Shower 👶', ar: 'حفل استقبال مولود 👶' },
    'booking.other_event': { fr: 'Autre événement 📅', en: 'Other event 📅', ar: 'فعالية أخرى 📅' },
    'booking.whatsAppNew': { fr: '🎉 NOUVELLE RÉSERVATION D\'ÉVÉNEMENT 🎉', en: '🎉 NEW EVENT BOOKING 🎉', ar: '🎉 حجز فعالية جديد 🎉' },
    'booking.clientInfo': { fr: '👤 Informations du client:', en: '👤 Client Information:', ar: '👤 معلومات العميل:' },
    'booking.eventDetails': { fr: '📅 Détails de l\'événement:', en: '📅 Event Details:', ar: '📅 تفاصيل الفعالية:' },
    'booking.estBudget': { fr: '💰 Budget estimé:', en: '💰 Estimated Budget:', ar: '💰 الميزانية المقدرة:' },
    'booking.specialReq': { fr: '📝 Demandes spéciales:', en: '📝 Special Requests:', ar: '📝 طلبات خاصة:' },
    'booking.none': { fr: 'Aucune', en: 'None', ar: 'لا يوجد' },
    'booking.subtitle': { fr: 'Anniversaires, Graduations, Fêtes & Plus', en: 'Birthdays, Graduations, Parties & More', ar: 'أعياد ميلاد، تخرج، حفلات والمزيد' },
    'booking.name': { fr: 'Votre nom *', en: 'Your name *', ar: 'اسمك *' },
    'booking.email': { fr: 'Email', en: 'Email', ar: 'البريد الإلكتروني' },
    'booking.phone': { fr: 'Téléphone *', en: 'Phone *', ar: 'الهاتف *' },
    'booking.date': { fr: 'Date de l\'événement *', en: 'Event date *', ar: 'تاريخ الفعالية *' },
    'booking.time': { fr: 'Heure *', en: 'Time *', ar: 'الوقت *' },
    'booking.guests': { fr: 'Nombre d\'invités *', en: 'Number of guests *', ar: 'عدد الضيوف *' },
    'booking.budget': { fr: 'Budget estimé (FCFA)', en: 'Estimated budget (FCFA)', ar: 'الميزانية المقدرة (فرنك أفريقي)' },
    'booking.message': { fr: 'Demandes spéciales', en: 'Special requests', ar: 'طلبات خاصة' },
    'booking.placeholderName': { fr: 'Jean Dupont', en: 'John Doe', ar: 'فلان الفلاني' },
    'booking.specialRequestsPlaceholder': { fr: 'Décoration, gâteau personnalisé, menu spécial, allergie alimentaires...', en: 'Decoration, custom cake, special menu, food allergies...', ar: 'ديكور، كعكة مخصصة، قائمة طعام خاصة، حساسية الطعام...' },
    'booking.confirmHelp': { fr: 'Nous vous contacterons dans les 24h pour confirmer votre réservation', en: 'We will contact you within 24h to confirm your reservation', ar: 'سنتواصل معك في غضون 24 ساعة لتأكيد حجزك' },
    'booking.reserve': { fr: 'Reserver', en: 'Reserve', ar: 'حجز' },
    'booking.eventType': { fr: 'Type d\'événement *', en: 'Event type *', ar: 'نوع الفعالية *' }
};

export const getTranslation = (key: string, lang: Language): string => {
    const translation = translations[key];
    if (!translation) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
    }
    return translation[lang] || translation.fr || key;
};
