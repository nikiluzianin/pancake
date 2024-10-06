const form = document.querySelector('.form-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector('#type');
const totalPriceElement = document.querySelector('#totalPrice');
let total = 0;



const pancakePriceCalc = () => {
    total = parseInt(typeSelect.value) || 0;

    checkToppings();
    //checks what topping are selected

    totalPriceElement.textContent = `${total.toFixed(0)}€`;
    //changing the price

    const priceBanner = document.querySelector('.price-banner');
    priceBanner.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' },
        ],
        {
            duration: 100,
            iterations: 1,
        }
    );

    //animation
};

const checkToppings = () => {
    for (const item of checkboxes) {
        if (item.checked) {
            const itemPrice = parseInt(item.value) || 0;
            total += itemPrice;
        }
    }
};

form.addEventListener('change', pancakePriceCalc);

//listener to the whole form

pancakePriceCalc();
