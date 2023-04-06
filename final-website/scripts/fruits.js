
let selectedFruits = [];

const getFruit = async () => {

  const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
  fruitList = await response.json();
  
  for (let i = 1; i <= 3; i++) {
      let select = document.createElement("select");
      select.id = `fruit${i}`;

      select.addEventListener("change", () => {
          selectedFruits[i-1] = select.value;
      });

      let defaultOption = document.createElement("option");
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.text = "Select one...";
      select.appendChild(defaultOption);
  
      for (let fruit of fruitList) {
          let option = document.createElement("option");
          option.value = fruit.name;
          option.text = fruit.name;
          select.appendChild(option);
      }
      
      document.getElementById(`fruit${i}`).appendChild(select);
  }
}
getFruit();

const button = document.getElementById("submitBtn");
const order = document.querySelector(".order");

button.addEventListener('click', function() {
    const fName = document.getElementById('fName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    let thanks = document.createElement('h1');
    let heading = document.createElement('h1');
    let date = document.createElement('p');
    let currentD = new Date();
    let orderDate = currentD.getDate() + '/' + (currentD.getMonth() + 1) + '/' + currentD.getFullYear();
    let orderName = document.createElement('h2');
    let orderEmail = document.createElement('h3');
    let orderPhone = document.createElement('h3');
    let fruitsHeading = document.createElement('h4');

    thanks.textContent = `Thank you for ordering a drink!`;
    heading.textContent = `Order Summary:`;
    date.textContent = 'Order date: ' + orderDate;
    orderName.textContent = `Name: ${fName}`;
    orderEmail.textContent = `Email: ${email}`;
    orderPhone.textContent = `Phone: ${phone}`;
    fruitsHeading.textContent = `Drink ingredients:`

    order.appendChild(thanks);
    order.appendChild(heading);
    order.appendChild(date);
    order.appendChild(orderName);
    order.appendChild(orderEmail);
    order.appendChild(orderPhone);
    order.appendChild(fruitsHeading);

    for (let selection of selectedFruits) {
      let orderedFruit = document.createElement('h4');
      orderedFruit.textContent = `${selection}`;
      order.appendChild(orderedFruit);
    }
  
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;
  
    
    for (let fruit of fruitList) {
        if (selectedFruits.includes(fruit.name)) {
        totalCarbs += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritions.protein;
        totalFat += fruit.nutritions.fat;
        totalSugar += fruit.nutritions.sugar;
        totalCalories += fruit.nutritions.calories;
        }
    }
  
    let carbs = document.createElement('p');
    let protein = document.createElement('p');
    let fat = document.createElement('p');
    let sugar = document.createElement('p');
    let calories = document.createElement('p');
  
    carbs.textContent = `Total Carbs: ${totalCarbs.toFixed(2)}`;
    protein.textContent = `Total Protein: ${totalProtein.toFixed(2)}`;
    fat.textContent = `Total Fat: ${totalFat.toFixed(2)}`;
    sugar.textContent = `Total Sugar: ${totalSugar.toFixed(2)}`;
    calories.textContent = `Total Calories: ${totalCalories.toFixed(2)}`;

    order.appendChild(carbs);
    order.appendChild(protein);
    order.appendChild(fat);
    order.appendChild(sugar);
    order.appendChild(calories);
  
    let instructions = document.getElementById('instructions')

    if (!instructions.value.trim().length == 0)
    {
        let specialInstructionsHeader = document.createElement('h3');
        let specialInstructions = document.createElement('p');

        specialInstructionsHeader.textContent = 'Special Instructions:';
        specialInstructions.textContent = `${instructions}`;

        order.appendChild(specialInstructionsHeader);
        order.appendChild(specialInstructions);
    }

    const cookieNum = document.cookie
      .split('; ')
      .find(row => row.startsWith('specialtydrinks='))
      ?.split('=')[1];
  
    const orderQuantity = parseInt(cookieNum);
  
    if (!isNaN(orderQuantity)) {
      document.cookie = `specialtydrinks=${orderQuantity + 1}; path=/`;
    } else {
      document.cookie = `specialtydrinks=${1}; path=/`;
    }
});