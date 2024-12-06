function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function showItems(formId, questionsId) {
    const form = document.getElementById(formId);
    const questionsDiv = document.getElementById(questionsId);
    questionsDiv.innerHTML = '';
    Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).forEach(input => {
        const itemLabel = input.parentElement.textContent.trim();
        const itemName = input.getAttribute('data-item');
        questionsDiv.innerHTML += `
            <div class="question">
                <label>${itemLabel}</label>
                <input type="number" name="${itemName}" placeholder="Ingrese el valor">
            </div>`;
    });
    questionsDiv.classList.remove('hidden');
}
