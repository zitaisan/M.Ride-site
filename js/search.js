document.getElementById('fetchDataButton').addEventListener('click', function() {
    fetch('https://your-backend.com/api/data')
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Очищаем блок перед выводом

            // Создаем элементы для каждого поля данных
            const name = document.createElement('p');
            name.textContent = `Название: ${data.name}`;

            const price = document.createElement('p');
            price.textContent = `Цена: ${data.price}`;

            const available = document.createElement('p');
            available.textContent = `Наличие: ${data.available ? 'В наличии' : 'Нет в наличии'}`;

            // Добавляем созданные элементы в блок вывода
            outputDiv.appendChild(name);
            outputDiv.appendChild(price);
            outputDiv.appendChild(available);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
            document.getElementById('output').textContent = 'Ошибка при получении данных.';
        });
});
