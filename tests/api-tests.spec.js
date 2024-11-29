const { test, expect, request } = require('@playwright/test');

test.describe('API-тесты для контактной формы', () => {
    test('Успешная отправка данных через API', async ({}) => {
        // URL API
        const apiUrl = 'https://automationintesting.online/contact';

        // Данные для отправки
        const requestBody = {
            name: 'Альберт Альберт',
            email: 'alik1892@mail.ru',
            phone: '+79091234567',
            subject: 'Test Donteco',
            description: 'Тестовое задание'
        };

        // Выполнение POST-запроса
        const apiResponse = await request.post(apiUrl, {
            data: requestBody
        });

        // Проверка ответа
        expect(apiResponse.ok()).toBeTruthy();
        const responseBody = await apiResponse.json();
        expect(responseBody.message).toBe('Message received successfully');
    });
});
