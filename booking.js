const form = document.getElementById('booking-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        alert('Пожалуйста, заполните все обязательные поля корректно.');
        return;
    }

    alert('Спасибо! ваш столик успешно забронирован.');

    form.reset(); 
});