document.addEventListener('DOMContentLoaded', function () {
    const allFighters = Array.from(document.querySelectorAll('.fighterInMenu'));
    const searchInput = document.querySelector('.searchInput');

    if (!searchInput) return;

    function removeDiacritics(text) {
        const diacriticsMap = {
            'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o',
            'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z', 'Á': 'A',
            'Č': 'C', 'Ď': 'D', 'É': 'E', 'Ě': 'E', 'Í': 'I', 'Ň': 'N', 'Ó': 'O', 'Ř': 'R',
            'Š': 'S', 'Ť': 'T', 'Ú': 'U', 'Ů': 'U', 'Ý': 'Y', 'Ž': 'Z'
        };
        
        return text.replace(/[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, match => diacriticsMap[match]);
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = removeDiacritics(this.value.toLowerCase());

        window.filteredFighters = allFighters.filter(fighter => {
            const name = removeDiacritics(fighter.querySelector('.fighterName')?.textContent.toLowerCase() || ''); 
            const nickname = removeDiacritics(fighter.querySelector('.fighterNickname')?.textContent.toLowerCase() || ''); 

            return name.includes(searchTerm) || nickname.includes(searchTerm);
        });

        window.currentFighterPage = 1;

        if (typeof window.renderFighterPage === 'function') {
            window.renderFighterPage(window.currentFighterPage);
        }
    });
});
