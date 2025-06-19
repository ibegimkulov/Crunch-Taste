document.getElementById("feedback-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const phone = this.phone.value;
  const message = this.message.value;

  const telegramToken = "ТОКЕН_БОТА";
  const chatId = "ID_ЧАТА";
  const text = `📬 Новое сообщение с сайта:\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Сообщение: ${message}`;

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  })
    .then((res) => {
      document.getElementById("form-status").textContent = "✅ Сообщение отправлено!";
      this.reset();
    })
    .catch((err) => {
      document.getElementById("form-status").textContent = "❌ Ошибка при отправке.";
      console.error(err);
    });
});
