const burgerIcon = document.querySelector('.fa-bars');
        const menu = document.getElementById('menuLinks');

        burgerIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
        });

        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.addEventListener('click', () => {
            menu.classList.remove('active');
        });
