const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';




async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let portrait = document.createElement('img');

        let start = new Date(prophet.birthdate);
        let end = new Date(prophet.death);

        if (!prophet.death){
            end = new Date();
        }

        let ageAtDeath = end.getFullYear() - start.getFullYear();
        if (end.getMonth() < start.getMonth() || end.getMonth() == start.getMonth() && end.getDate() < start.getDate()) {
            ageAtDeath--;
        }


        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        if (!prophet.death) {
            p3.textContent = `Current Age: ${ageAtDeath}`;
        }
        else
        {
            p3.textContent = `Age at Death: ${ageAtDeath}`;
        }


        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}


getProphetData(url);