const dataUrl = 'https://tarius565.github.io/wdd230/chamber/data.json';

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.businesses);
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const spotlight1 = document.querySelector('div#spotlight1');
    const spotlight2 = document.querySelector('div#spotlight2');
    const spotlight3 = document.querySelector('div#spotlight3');

    var spotlight_list = [];
    var business_list = [];
    businesses.forEach(business => {
        if (business.level == "Gold" || business.level == "Silver"){
            spotlight_list.push(business);
        }
    });

    for (let i = 0; i < 3; i++)
    {
        let x = Math.floor(Math.random() * spotlight_list.length);
        business_list.push(spotlight_list[x]);
        spotlight_list.splice(x,1);
    }

    let business1 = business_list[0];
    let business2 = business_list[1];
    let business3 = business_list[2];

    for (let j = 0; j < business_list.length; j++) {

    }

    let business1_h2 = document.createElement('h2');
    let business1_logo = document.createElement('img');   
    let business1_p1 = document.createElement('p');   
    let business1_a = document.createElement('a');   
    
    business1_h2.textContent = `${business1.name}`;
    business1_p1.textContent = `${business1.number}`;
    business1_a.setAttribute = ("href", business1.website);
    business1_a.innerHTML = "Website";

    business1_logo.setAttribute('src', business1.logo);
    business1_logo.setAttribute('alt', `logo of ${business1.name}`);
    business1_logo.setAttribute('loading', 'lazy');
    
    spotlight1.appendChild(business1_h2);
    spotlight1.appendChild(business1_logo);
    spotlight1.appendChild(business1_p1);
    spotlight1.appendChild(business1_a);


    let business2_h2 = document.createElement('h2');
    let business2_logo = document.createElement('img');   
    let business2_p1 = document.createElement('p');   
    let business2_a = document.createElement('a');   
    
    business2_h2.textContent = `${business2.name}`;
    business2_p1.textContent = `${business2.number}`;
    business2_a.setAttribute = ("href", business2.website);
    business2_a.innerHTML = "Website";

    business2_logo.setAttribute('src', business2.logo);
    business2_logo.setAttribute('alt', `logo of ${business2.name}`);
    business2_logo.setAttribute('loading', 'lazy');
    
    spotlight2.appendChild(business2_h2);
    spotlight2.appendChild(business2_logo);
    spotlight2.appendChild(business2_p1);
    spotlight2.appendChild(business2_a);


    let business3_h2 = document.createElement('h2');
    let business3_logo = document.createElement('img');   
    let business3_p1 = document.createElement('p');   
    let business3_a = document.createElement('a');   
    
    business3_h2.textContent = `${business3.name}`;
    business3_p1.textContent = `${business3.number}`;
    business3_a.setAttribute = ("href", business3.website);
    business3_a.innerHTML = "Website";

    business3_logo.setAttribute('src', business3.logo);
    business3_logo.setAttribute('alt', `logo of ${business3.name}`);
    business3_logo.setAttribute('loading', 'lazy');
    
    spotlight3.appendChild(business3_h2);
    spotlight3.appendChild(business3_logo);
    spotlight3.appendChild(business3_p1);
    spotlight3.appendChild(business3_a);

}

getBusinessData(dataUrl);