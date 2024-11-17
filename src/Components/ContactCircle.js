import React, { useState } from 'react';
import axios from 'axios';

function ContactCircle() {
  const [isOpen, setIsOpen] = useState(false); // Отвечает за отображение формы
  const [name, setName] = useState(''); // Поле для имени
  const [phone, setPhone] = useState('+380'); // Код страны по умолчанию
  const [error, setError] = useState(''); // Сообщение об ошибке

  // Валидация и отправка данных
  const handleSubmit = async () => {
    // Простая валидация
    if (!name.trim()) {
      setError('Введите имя');
      return;
    }
    if (!/^\+380\d{9}$/.test(phone)) {
      setError('Введите корректный номер телефона с кодом страны (+380)');
      return;
    }

    setError('');

    // Telegram API для отправки сообщения
    const TELEGRAM_API = `https://api.telegram.org/bot7600008292:AAHe0_2Wo4spk9w2ybbSnYFmNfGOT8b-dts/sendMessage`;
    const chat_id = '-4573009838';
    const message = `Имя: ${name}\nТелефон: ${phone}`;

    try {
      await axios.post(TELEGRAM_API, {
        chat_id,
        text: message,
      });
      alert('Сообщение отправлено!');
      setName(''); // Очистка формы
      setPhone('+380'); // Сброс номера телефона на дефолт
      setIsOpen(false); // Закрыть форму
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
      alert('Не удалось отправить сообщение. Попробуйте снова.');
    }
  };

  // Ограничение на ввод цифр после кода страны
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Проверка и ограничение ввода только цифр после +380
    if (/^\+380\d{0,9}$/.test(value)) {
      setPhone(value);
    }
  };

  // Ограничение на ввод имени (запрещаем цифры)
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Запрещаем ввод цифр
    if (/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setName(value);
    }
  };

  return (
    <div className="contact-circle">
      {/* Кружок с трубкой */}
      <div
        className="circle"
        onClick={() => setIsOpen((prev) => !prev)}
        title="Связаться с нами"
      >
        📞
      </div>
      {isOpen && (
        <div className="contact-form">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={handleNameChange} // Обработчик для имени
          />
          <input
            type="text"
            placeholder="Номер телефона"
            value={phone}
            onChange={handlePhoneChange} // Обработчик для телефона
          />
          {error && <p className="error">{error}</p>} {/* Отображение ошибок */}
          <button onClick={handleSubmit}>Подтвердить</button>
        </div>
      )}
    </div>
  );
}

export default ContactCircle;
