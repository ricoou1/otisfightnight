const searchInput = document.querySelector('.searchInput');
const messages = document.querySelectorAll('#messages a');
const noResults = document.getElementById('noResults');

function removeDiacritics(text) {
    const diacriticsMap = {
        'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o',
        'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z', 'Á': 'A',
        'Č': 'C', 'Ď': 'D', 'É': 'E', 'Ě': 'E', 'Í': 'I', 'Ň': 'N', 'Ó': 'O', 'Ř': 'R',
        'Š': 'S', 'Ť': 'T', 'Ú': 'U', 'Ů': 'U', 'Ý': 'Y', 'Ž': 'Z'
    };
    
    return text.replace(/[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, match => diacriticsMap[match]);
}

searchInput.addEventListener('input', () => {
    const query = removeDiacritics(searchInput.value.toLowerCase());
    let visibleCount = 0;

    messages.forEach(message => {
        const title = removeDiacritics(message.querySelector('.messageTitle').textContent.toLowerCase());
        const text = removeDiacritics(message.querySelector('.messageInfo p:nth-child(2)').textContent.toLowerCase());
        const date = removeDiacritics(message.querySelector('.messageDateAuthor').textContent.toLowerCase());

        if (title.includes(query) || text.includes(query) || date.includes(query)) {
            message.style.display = '';
            visibleCount++;
        } else {
            message.style.display = 'none';
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});
