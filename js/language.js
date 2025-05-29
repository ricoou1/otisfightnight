
    const texts = {
        cz: {
            language: 'CZ',
            browse: 'Procházet',
            fighters: 'Fighteři',
            contact: 'Kontakt',
            about: 'O nás',
            news: 'Zprávy',
            career: 'Kariéra',
            faq: 'FAQ',
            follow: 'Sledujte nás na:'
        },
        en: {
            language: 'ENG',
            browse: 'Browse',
            fighters: 'Fighters',
            contact: 'Contact',
            about: 'About Us',
            news: 'News',
            career: 'Careers',
            faq: 'FAQ',
            follow: 'Follow us on:'
        }
    };

    function changeLanguage(lang) {
        document.querySelector('.language').innerText = texts[lang].language;
        document.querySelector('.menuLink:nth-child(1)').innerText = texts[lang].browse;
        document.querySelector('.menuLink:nth-child(2)').innerText = texts[lang].fighters;
        document.querySelector('.menuLink:nth-child(3)').innerText = texts[lang].contact;
        document.querySelector('.menuLink:nth-child(4)').innerText = texts[lang].about;
        document.querySelector('.menuLink:nth-child(5)').innerText = texts[lang].news;
        document.querySelector('.menuLink:nth-child(6)').innerText = texts[lang].career;
        document.querySelector('.menuLink:nth-child(7)').innerText = texts[lang].faq;
        document.querySelector('header h1').innerText = texts[lang].follow;
    }

    document.getElementById('languageSwitcher').addEventListener('click', function() {
        const currentLanguage = document.querySelector('.language').innerText;
        const newLanguage = currentLanguage === 'ENG' ? 'cz' : 'en';
        changeLanguage(newLanguage);
    });

    changeLanguage('en');
