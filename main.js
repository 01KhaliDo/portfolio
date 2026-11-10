/**
 * =========================================
 *  MAIN.JS - Core Logic for Portfolio
 * =========================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. GLOBAL STATE & CONFIG HELPERS
       ========================================= */
    const CONFIG = {
        defaultLang: 'sv',
        defaultTheme: 'light',
        selectors: {
            sidebarLinks: '.topbar a[href^="#"], .button-nav a',
            langToggle: 'lang-toggle',
            darkToggle: 'dark-toggle',
            nextButton: '.next-button'
        }
    };

    let currentLang = localStorage.getItem('lang') || CONFIG.defaultLang;


    /* =========================================
       2. NAVIGATION LOGIC (Smooth Scroll)
       ========================================= */
    function initSmoothScroll() {
        const links = document.querySelectorAll(CONFIG.selectors.sidebarLinks);

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Internal links (anchors) -> Smooth Scroll
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // External links (PDF, http) -> Default behavior (open in new tab/download)
            });
        });
    }


    /* =========================================
       3. LANGUAGE LOGIC
       ========================================= */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update static text via data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update dynamic content (Projects / Skills)
        if (typeof renderProjects === 'function') renderProjects(lang);
        if (typeof renderSkills === 'function') renderSkills(lang);
        document.documentElement.lang = lang;

        // Update UI Controls
        updateLanguageButtonText(lang);
        updateDarkModeButtonText();

        // Update CV Link
        const cvLink = document.getElementById('cv-link');
        if (cvLink) {
            cvLink.href = lang === 'en' ? 'cv/cv-en.pdf' : 'cv/cv-se.pdf';
        }
    }

    function updateLanguageButtonText(lang) {
        const langToggle = document.getElementById(CONFIG.selectors.langToggle);
        if (langToggle) {
            langToggle.textContent = translations[lang].lang_button;
            langToggle.setAttribute('aria-label', translations[lang].lang_label);
        }
    }

    /* =========================================
       4. DARK MODE LOGIC
       ========================================= */
    function initDarkMode() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        updateDarkModeButtonText();
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeButtonText();
    }

    function updateDarkModeButtonText() {
        const isDark = document.body.classList.contains('dark-mode');
        const btn = document.querySelector(CONFIG.selectors.nextButton); // Targeting the dark mode button

        if (btn) {
            const key = isDark ? 'toggle_light' : 'toggle_dark';
            btn.setAttribute('data-i18n', key);

            // Translate the new key immediately
            if (translations[currentLang] && translations[currentLang][key]) {
                btn.textContent = translations[currentLang][key];
            }
        }
    }


    /* =========================================
       5. EVENT LISTENERS SETUP
       ========================================= */
    function setupEventListeners() {
        // Language Toggle
        const langBtn = document.getElementById(CONFIG.selectors.langToggle);
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const newLang = currentLang === 'sv' ? 'en' : 'sv';
                setLanguage(newLang);
            });
        }

        // Dark Mode Toggle
        const darkBtn = document.getElementById(CONFIG.selectors.darkToggle);
        if (darkBtn) {
            darkBtn.addEventListener('click', toggleDarkMode);
        }
    }


    /* =========================================
       6. INITIALIZATION
       ========================================= */
    function init() {
        initSmoothScroll();
        initDarkMode();
        setupEventListeners();
        setLanguage(currentLang); // Initial render
    }

    // Start App
    init();

});
