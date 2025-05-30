document.addEventListener('DOMContentLoaded', function () {
    const allFighters = Array.from(document.querySelectorAll('.fighterInMenu'));
    const pagination = document.getElementById('pagination');
    const noResults = document.getElementById('noResults');

    const ITEMS_PER_PAGE = 12;

    // Pokud search.js není načtený, fallback na všechny bojovníky
    window.filteredFighters = window.filteredFighters || allFighters;
    window.currentFighterPage = 1;

    function renderPaginationButtons(totalItems, current) {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
        if (totalPages <= 1) return;

        if (current > 1) {
            const prev = document.createElement('button');
            prev.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
            prev.onclick = () => {
                window.currentFighterPage--;
                renderFighterPage(window.currentFighterPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(prev);
        }

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === current) btn.style.fontWeight = 'bold';
            btn.onclick = () => {
                window.currentFighterPage = i;
                renderFighterPage(window.currentFighterPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(btn);
        }

        if (current < totalPages) {
            const next = document.createElement('button');
            next.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            next.onclick = () => {
                window.currentFighterPage++;
                renderFighterPage(window.currentFighterPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(next);
        }
    }

    window.renderFighterPage = function (page) {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;

        allFighters.forEach(fighter => fighter.style.display = 'none');

        const toShow = window.filteredFighters.slice(start, end);
        toShow.forEach(f => f.style.display = '');

        renderPaginationButtons(window.filteredFighters.length, page);

        if (noResults) {
            noResults.style.display = window.filteredFighters.length === 0 ? 'block' : 'none';
        }
    };

    renderFighterPage(window.currentFighterPage);
});
