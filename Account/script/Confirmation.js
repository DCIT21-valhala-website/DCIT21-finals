const card = document.getElementsByClassName('card');
const dismiss = document.getElementsByClassName('dismiss');
const checkOutBtn = document.getElementsByClassName('check-out-btn');

if (dismiss) {
    dismiss[0].addEventListener('click', () => {
        card[0].style.display = 'none';
    });
}

if (checkOutBtn) {
    checkOutBtn[0].addEventListener('click', () => {
        card[0].style.display = 'block';
    });
}