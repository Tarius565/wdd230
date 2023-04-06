//loadcookie
const cookieNum = document.cookie
.split('; ')
.find(row => row.startsWith('specialtydrinks='))
?.split('=')[1];

const orderQuantity = parseInt(cookieNum);

const orderDrinkNum = document.getElementById('drinkNum');

if (!isNaN(orderQuantity)) {
    orderDrinkNum.textContent = orderQuantity;
}