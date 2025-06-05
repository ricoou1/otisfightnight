document.addEventListener('DOMContentLoaded', function () {
    const allMessages = Array.from(document.querySelectorAll('#messages > a'));
    const pagination = document.getElementById('pagination');

    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;

    function renderPage(page) {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;

        allMessages.forEach(msg => msg.style.display = 'none');
        allMessages.slice(start, end).forEach(msg => msg.style.display = '');

        renderPaginationButtons(allMessages.length, page);
    }

    function renderPaginationButtons(totalItems, current) {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        if (totalPages <= 1) return;

        if (current > 1) {
            const prev = document.createElement('button');
            prev.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
            prev.onclick = () => {
                currentPage--;
                renderPage(currentPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(prev);
        }

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === current) btn.style.fontWeight = 'bold';
            btn.onclick = () => {
                currentPage = i;
                renderPage(currentPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(btn);
        }

        if (current < totalPages) {
            const next = document.createElement('button');
            next.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            next.onclick = () => {
                currentPage++;
                renderPage(currentPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            pagination.appendChild(next);
        }
    }

    renderPage(currentPage);
});
