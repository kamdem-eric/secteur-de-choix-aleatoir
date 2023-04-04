//ecoute les evenement du texarea

//transforme un text en tableau

//chaque element du tableau dans une plage

const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.addEventListener('keyup', (event) => {
        createTags(event.target.value);

        if (event.key === 'Enter') {
            setTimeout(() => {
                event.target.value = '';
            }, 10);

            randomSelect();
        }
    })
    // regarde les fonction split, filter, trim et map
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    console.log(tags);

    tagsEl.innerHTML = '';

    tags.forEach(tags => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tags;
        tagsEl.append(t);
    });
}

function randomSelect() {
    const times = 30;
    const int = 100;
    //lire ce que ce fait la methode setInterval
    const interval = setInterval(() => {
        // selection du tag
        const randomTag = pickRandomTag();

        //highlight
        highlightTag(randomTag);

        //unHighlightTag
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, int);

    }, int);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, int);
    }, int * times);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tags) {
    tags.classList.add('highlight');
}

function unHighlightTag(tags) {
    tags.classList.remove('highlight');
}