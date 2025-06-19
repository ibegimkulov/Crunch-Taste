document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const date = this.date.value;
    const time = this.time.value;
    const people = this.people.value;
    const phone = this.phone.value.trim();

    if (!name || !date || !time || !people || !phone) {
        alert('Пожалуйста, заполните все поля. ');
        return;
    }

    this.reset();

    const messageEl = document.getElementById('form-message');
    `Спасибо, ${name}! Ваша бронь на ${date} в ${time} на ${people} человек приняты. Мы свяжемся с вами по телефону ${phone}.`;
})

function toggleMenu() {
    document.querySelector("header nav ul").classList.toggle("show-menu");
}