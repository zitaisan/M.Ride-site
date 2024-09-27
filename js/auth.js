document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отключаем стандартное поведение отправки формы

    // Получаем данные формы
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Отправляем запрос на сервер
    fetch('https://your-backend.com/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: login, password: password })
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Преобразуем ответ в JSON, если статус 200
        } else {
            throw new Error('Ошибка авторизации'); // В случае ошибки
        }
    })
    .then(data => {
        // Проверяем, авторизован ли пользователь
        if (data.success) { // Например, бэкенд возвращает { success: true }
            // Перенаправляем на другую страницу при успешной авторизации
            window.location.href = 'profile-page.html'; // Переход на защищенную страницу
        } else {
            // Выводим сообщение об ошибке, если авторизация не удалась
            document.getElementById('error-message').textContent = 'Неверный логин или пароль';
        }
    })
    .catch(error => {
        // Обрабатываем ошибки сети или ответа
        console.error('Ошибка:', error);
        document.getElementById('message').textContent = 'Ошибка при авторизации';
    });
});
