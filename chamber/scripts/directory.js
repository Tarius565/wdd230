const url = 'https://tarius565.github.io/wdd230/chamber/data.json';

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.businesses);
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.directory-cards-grid');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let a = document.createElement('a');
        let logo = document.createElement('img');
        let level = document.createElement('p');

        a.setAttribute("href", business.website);
        a.innerHTML = "Website";

        h2.textContent = `${business.name}`;
        p1.textContent = `Address: ${business.address}`;
        p2.textContent = `Number: ${business.number}`;

        level.textContent = `Membership: ${business.level}`;

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(a);
        card.appendChild(level);

        cards.appendChild(card);
    });
}

getBusinessData(url);



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".directory-cards-grid");

gridbutton.addEventListener("click", () => {

	display.classList.add("directory-cards-grid");
	display.classList.remove("directory-cards-list");
});

listbutton.addEventListener("click", () => {

	display.classList.add("directory-cards-list");
	display.classList.remove("directory-cards-grid");
});
