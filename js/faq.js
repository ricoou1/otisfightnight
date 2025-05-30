const questions = document.querySelectorAll('section.question');

questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const allAnswers = document.querySelectorAll('section.answer');

        allAnswers.forEach(a => {
            if (a !== answer) a.classList.remove('open');
        });

        answer.classList.toggle('open');
    });
});