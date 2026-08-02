function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(match) {
        const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' };
        return escapeMap[match];
    });
}

const translations = {
    bg: {
        counter: "Активни обяви", noJobs: "Няма намерени позиции.", formTitle: "Публикувай нова позиция",
        lblTitle: "Заглавие на работата *", lblCompany: "Име на Компанията *", lblEmail: "Имейл за кандидатстване *", lblLocation: "Град / Локация *",
        lblSalary: "Месечна заплата (EUR) *", lblDesc: "Подробно описание на позицията *", lblCaptcha: "Защита срещу ботове *",
        btnSubmit: "Обяви позицията", seoTitle: "SEO Инструменти", seoDesc: "Изтеглете структуриран XML файл с всички активни обяви за работа.",
        btnSitemap: "Свали sitemap.xml", phSearch: "Търсене по ключова дума или фирма...", optAllLoc: "Всички региони",
        optRemote: "Дистанционно (Remote)", optRemoteSearch: "Дистанционно", optAbroad: "Чужбина (Abroad)", optAbroadSearch: "Чужбина",
        emptyPl: "Изберете обява от списъка или блог статия, за да прочетете съдържанието.",
        captchaErr: "Грешен отговор на защитния въпрос! Опитайте отново.", salaryErr: "Въведете валидно възнаграждение.",
        metaCompany: "Фирма", metaLoc: "Локация", metaSalary: "Възнаграждение", metaPosted: "Публикувано на",
        btnApply: "Кандидатствай директно", schemaTitle: "JSON-LD Структура (Четима за Google)", month: "месечно",
        author: "Екипът на Bestjobs", shareFb: "Сподели във FB", shareLn: "Сподели в LinkedIn", txtQrCode: "Сканирайте през телефон за бърз преглед",
        lblType: "Тип на обявата *", optFree: "Безплатна обява (Стандартна)", optVip: "🌟 VIP платена обява (10.00 EUR)", lblCard: "Данни за банкова карта *",
        mailSubject: "Кандидатстване за позиция: ",
        mailBody: "Здравейте,\n\nИнтересувам се от Вашата обява за работа за позиция \"{title}\" в компанията \"{company}\", публикувана в кариерния портал Bestjobs.BG.\n\nПрилагам своята автобиография (CV) към този имейл.\n\nС уважение,",
        cities: ["София", "Пловдив", "Варна", "Бургас", "Благоевград", "Велико Търново", "Видин", "Враца", "Габрово", "Добрич", "Кърджали", "Кюстендил", "Ловеч", "Монтана", "Пазарджик", "Перник", "Плевен", "Разград", "Русе", "Силистра", "Сливен", "Смолян", "Стара Загора", "Търговище", "Хасково", "Шумен", "Ямбол"]
    },
    en: {
        counter: "Active positions", noJobs: "No positions found.", formTitle: "Post a New Job",
        lblTitle: "Job Title *", lblCompany: "Company Name *", lblEmail: "Application Email *", lblLocation: "City / Location *",
        lblSalary: "Monthly Salary (EUR) *", lblDesc: "Detailed Job Description *", lblCaptcha: "Anti-Bot Protection *",
        btnSubmit: "Post Job", seoTitle: "SEO Tools", seoDesc: "Download a structured XML sitemap file with all active positions.",
        btnSitemap: "Download sitemap.xml", phSearch: "Search by keyword or company...", optAllLoc: "All regions",
        optRemote: "Remote (Work from home)", optRemoteSearch: "Remote", optAbroad: "Abroad (International)", optAbroadSearch: "Abroad",
        emptyPl: "Select a job from the list or a blog post to view its content and schema markup.",
        captchaErr: "Incorrect captcha answer! Please try again.", salaryErr: "Please enter a valid salary.",
        metaCompany: "Company", metaLoc: "Location", metaSalary: "Salary", metaPosted: "Posted on",
        btnApply: "Apply Directly", schemaTitle: "JSON-LD Schema Markup (Google Friendly)", month: "monthly",
        author: "Bestjobs Team", shareFb: "Share on FB", shareLn: "Share on LinkedIn", txtQrCode: "Scan via smartphone for quick mobile view",
        lblType: "Listing Type *", optFree: "Free Listing (Standard)", optVip: "🌟 VIP Paid Listing (10.00 EUR)", lblCard: "Credit / Debit Card Details *",
        mailSubject: "Job Application for: ",
        mailBody: "Hello,\n\nI am interested in your job opening for the position of \"{title}\" at \"{company}\", published on the career board Bestjobs.BG.\n\nPlease find my resume (CV) attached to this email.\n\nBest regards,",
        cities: ["Sofia", "Plovdiv", "Varna", "Burgas", "Blagoevgrad", "Veliko Tarnovo", "Vidin", "Vratsa", "Gabrovo", "Dobrich", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Razgrad", "Ruse", "Silistra", "Sliven", "Smolyan", "Stara Zagora", "Targovishte", "Haskovo", "Shumen", "Yambol"]
    }
};

const blogDatabase = [
    { id: "post_1", date: "2026-08-01", title_bg: "Как да преминем успешно интервю за дистанционна работа?", title_en: "How to Ace a Remote Job Interview?", summary_bg: "Дистанционната работа изисква специални умения. Научете кои са най-важните стъпки за успех.", summary_en: "Remote work requires unique skills. Learn the most critical steps to succeed in your next call.", content_bg: "Интервютата за дистанционна работа се провеждат предимно онлайн. Уверете се, че камерата и микрофонът Ви работят перфектно.", content_en: "Remote interviews are conducted mostly online. Ensure your webcam and microphone work flawlessly." }
];

const defaultJobs = [
    { id: "job_1", title: "Frontend Engineer (React)", company: "Дигитал Еволюшън ЕООД", email: "jobs@digital.bg", location: "София", salary: 2450, date: "2026-08-01", isVip: true, description: "Търсим мотивиран Frontend специалист." }
];

let jobsDatabase = JSON.parse(localStorage.getItem('saved_jobs')) || defaultJobs;
localStorage.setItem('saved_jobs', JSON.stringify(jobsDatabase));

let currentLang = localStorage.getItem('site_lang') || 'bg';
let currentlySelectedJobId = null;
let captchaNum1 = 0, captchaNum2 = 0;

const stripe = Stripe('pk_test_51PxxXkP5MvXp3Gz7TeStKuEyKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKeYKe009pX9xX3c');
const elements = stripe.elements();
const cardElement = elements.create('card', { style: { base: { fontSize: '16px', color: '#202124' } } });

const listTarget = document.getElementById('job-list-target');
const blogTarget = document.getElementById('blog-posts-target');
const detailsTarget = document.getElementById('job-details-target');
const counterTarget = document.getElementById('total-jobs-counter');
const uploadForm = document.getElementById('job-upload-form');
const keywordInput = document.getElementById('search-keyword');
const locationSelect = document.getElementById('search-location');
const formLocationSelect = document.getElementById('ins-location');
const formTypeSelect = document.getElementById('ins-type');
const cardWrapper = document.getElementById('card-element-wrapper');
const cardErrors = document.getElementById('card-errors');
const sitemapBtn = document.getElementById('download-sitemap-btn');
const g_captchaQuestionEl = document.getElementById('captcha-question');
const g_captchaAnswerInput = document.getElementById('captcha-answer');
const langSelect = document.getElementById('language-select');
const privacyBanner = document.getElementById('privacy-banner');
const acceptPrivacyBtn = document.getElementById('btn-accept-privacy');

cardElement.mount('#stripe-card-element');

function applyLanguage() {
    const lang = translations[currentLang];
    langSelect.value = currentLang;
    document.getElementById('txt-form-title').textContent = lang.formTitle;
    document.getElementById('txt-label-title').textContent = lang.lblTitle;
    document.getElementById('txt-label-company').textContent = lang.lblCompany;
    document.getElementById('txt-label-email').textContent = lang.lblEmail;
    document.getElementById('txt-label-location').textContent = lang.lblLocation;
    document.getElementById('txt-label-salary').textContent = lang.lblSalary;
    document.getElementById('txt-label-type').textContent = lang.lblType;
    document.getElementById('txt-label-card').textContent = lang.lblCard;
    document.getElementById('txt-label-desc').textContent = lang.lblDesc;
    document.getElementById('txt-label-captcha').textContent = lang.lblCaptcha;
    document.getElementById('txt-btn-submit').textContent = lang.btnSubmit;
    document.getElementById('txt-seo-title').textContent = lang.seoTitle;
    document.getElementById('txt-seo-desc').textContent = lang.seoDesc;
    document.getElementById('txt-btn-sitemap').textContent = lang.btnSitemap;
    document.getElementById('txt-blog-heading').textContent = lang.blogHeading;
    
    keywordInput.placeholder = lang.phSearch;
    document.getElementById('ins-title').placeholder = lang.phTitle;
    document.getElementById('ins-company').placeholder = lang.phCompany;
    document.getElementById('ins-email').placeholder = lang.phEmail;
    document.getElementById('ins-salary').placeholder = lang.phSalary;
    document.getElementById('ins-description').placeholder = lang.phDesc;
    g_captchaAnswerInput.placeholder = lang.phCaptcha;

    populateOptions(lang); applyFilters(); renderBlog(); resetDetailsPanel(); checkPrivacyConsent();
}

function populateOptions(lang) {
    let formOptions = ''; let searchOptions = `<option value="">${lang.optAllLoc}</option>`;
    lang.cities.forEach(city => { formOptions += `<option value="${city}">${city}</option>`; searchOptions += `<option value="${city}">${city}</option>`; });
    formOptions += `<option value="Дистанционно">${lang.optRemote}</option><option value="Чужбина">${lang.optAbroad}</option>`;
    searchOptions += `<option value="Дистанционно">${lang.optRemoteSearch}</option><option value="Чужбина">${lang.optAbroadSearch}</option>`;
    formLocationSelect.innerHTML = formOptions; locationSelect.innerHTML = searchOptions;
    formTypeSelect.innerHTML = `
        <option value="free">${lang.optFree}</option>
        <option value="vip">${lang.optVip}</option>
    `;
}

formTypeSelect.addEventListener('change', () => { if (formTypeSelect.value === 'vip') { cardWrapper.classList.remove('hidden'); } else { cardWrapper.classList.add('hidden'); } }); 
